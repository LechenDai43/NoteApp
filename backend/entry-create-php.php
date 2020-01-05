<?php
if (isset($_POST['js'])) {
    include_once 'mysql-connection.php';
    include_once 'saving-common.php';

    if ($error == -1) {

        $directory_index = 0;
        $introduction = $note->{'introduction'};
        $introduction_directory = $format_directory . "-" . $directory_index . ".json";
        array_push($files, $introduction_directory);
        $v1 = $introduction_directory;
        $directory_index++;

        $statement = "insert into entries(id, introduction) value(" . $id . ",\"" . $introduction_directory . "\")";
        $outcome = mysqli_query($mysqli, $statement);
        $e = mysqli_error($mysqli);
        if (!empty($e)) {
            $error = $e;
            $statement = "delete from articles where id = " . $id;
            $outcome = mysqli_query($mysqli, $statement);
            mysqli_close($mysqli);
        } else {
            $entry_id = mysqli_insert_id($mysqli);

            $introduction_file = fopen($introduction_directory, 'w');
            fwrite($introduction_file, $introduction);
            fclose($introduction_file);

            $sections = $_POST['str_contents'];
            $v2 = 0;
            foreach ($sections as $value) {
                $section_directory = $format_directory . "-" . $directory_index . ".json";
                $v3 = $section_directory;
                $v4 = $note->{'content'}[$v2]->{'title'};
                $statement = "insert into entry_sections(entry_id, content, sect) value(" . $entry_id . ",\"" . $v3 . "\",\"" . $v4 . "\")";
                $outcome = mysqli_query($mysqli, $statement);
                if ($outcome != true) {
                    continue;
                }
                array_push($files, $section_directory);
                $directory_index++;
                $comment_file = fopen($section_directory, 'w');
                fwrite($comment_file, $value);
                fclose($comment_file);
            }

            $reference = $note->{'reference'};
            foreach ($reference as $item) {
                $statement = "insert into entry_references(entry_id, reference) value(".$entry_id.",\"".$item."\")";
                $outcome = mysqli_query($mysqli, $statement);
            }
        }

        //echo "All done";
    }

    include_once "feed_in_index.php";
    if ($error == -1) {
        echo "set ".$id;
    } else {
        echo $error;
        mysqli_close($mysqli);
    }
} else {
    echo "Cannot send content out.";
    mysqli_close($mysqli);
}