<?php
if (isset($_POST['js'])) {
    include_once 'mysql-connection.php';
    include_once 'saving-common.php';

    if ($error == -1) {

        $directory_index = 0;
        $content = $note->{'content'};
        $content_directory = $format_directory . "-" . $directory_index . ".json";
        array_push($files, $content_directory);
        $v1 = $content_directory;
        $directory_index++;
        $summary = $note->{'summary'};
        $summary_directory = $format_directory . "-" . $directory_index . ".json";
        array_push($files, $summary_directory);
        $v2 = $summary_directory;
        $directory_index++;

        $statement = "insert into notes(id, note, summary) value(" . $id . ",\"" . $content_directory . "\",\"" . $summary_directory . "\")";
        $outcome = mysqli_query($mysqli, $statement);
        $e = mysqli_error($mysqli);
        if (!empty($e)) {
            $error = $e;
            $statement = "delete from articles where id = " . $id;
            $outcome = mysqli_query($mysqli, $statement);
        } else {
            $note_id = mysqli_insert_id($mysqli);
            $content_file = fopen($content_directory, 'w');
            fwrite($content_file, $_POST['str_content']);
            fclose($content_file);
            $summary_file = fopen($summary_directory, 'w');
            fwrite($summary_file, $summary);
            fclose($summary_file);

            $comments = $note->{'comment'};
            foreach ($comments as $value) {
                $comment_directory = $format_directory . "-" . $directory_index . ".json";
                $v3 = $comment_directory;
                $statement = "insert into note_comments(note_id, comment) value(" . $note_id . ",\"" . $v3 . "\")";
                $outcome = mysqli_query($mysqli, $statement);
                $e = mysqli_error($mysqli);
                if (!empty($e)) {
                    continue;
                }
                array_push($files, $comment_directory);
                $directory_index++;
                $comment_file = fopen($comment_directory, 'w');
                fwrite($comment_file, $value);
                fclose($comment_file);
            }

            $cue = $note->{'cue'};
            foreach ($cue as $value) {
                $cue_id = -1;
                $statement = "select cue_id from note_cues where cue = \"" . $value . "\"";
                $outcome = mysqli_query($mysqli, $statement);
                if ($outcome->num_rows == 0) {
                    $statement = "insert into note_cues(cue) value (\"" . $value . "\")";
                    $outcome = mysqli_query($mysqli, $statement);
                    $cue_id = mysqli_insert_id($mysqli);
                } else {
                    $row = mysqli_fetch_row($outcome);
                    $cue_id = $row[0];
                }
                $statement = "insert into cue_ref(cue_id, note_id) value(" . $cue_id . "," . $note_id . ")";
                $outcome = mysqli_query($mysqli, $statement);
            }

            //echo "All done";

            include_once "feed_in_index.php";
        }
    }
    if ($error == -1) {
        echo "set ".$id;
    } else {
        echo $error;
    }
} else {
    echo "Cannot send content out.";
}