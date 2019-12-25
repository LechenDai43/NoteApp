<?php
if (isset($_POST['js'])) {
    include_once 'mysql-connection.php';
    include_once 'saving-common.php';

    $content = $note->{'content'};
    $content_copy = [];
    for ($i = 0; $i < count($content); $i++) {
        array_push($content_copy, $content[$i]);
        $sub_content_directory = $format_directory."_".$i."_subnotecontent.json";
        $sub_file = fopen($sub_content_directory, 'w');
        fwrite($sub_file, json_encode($content_copy[$i]->{'content'}));
        fclose($sub_file);
        $content_copy[$i]->{'content'} = $sub_content_directory;
    }
    $v1 = $format_directory."_notecontent.json";
    $content_file = fopen($v1, 'w');
    fwrite($content_file, json_encode($content_copy));
    fclose($content_file);


    $summary = $note->{'summary'};
    $v2 = $format_directory."_notesummary.json";
    $summary_file = fopen($v2, 'w');
    fwrite($summary_file, json_encode($summary));
    fclose($summary_file);


    $statement = "insert into notes (id, note, summary) value (".$id.",\"".$v1."\",\"".$v2."\")";
    $outcome = mysqli_query($mysqli, $statement);
    if ($outcome != true) {
        echo mysqli_error($mysqli);
        return;
    }
    $note_id = mysqli_insert_id($mysqli);

    $comments = $note->{'comment'};

}