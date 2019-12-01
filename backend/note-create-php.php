<?php
if (isset($_POST['js'])) {
    include_once 'mysql-connection.php';
    include_once 'saving-common.php';

    $content = $note->{'content'};
    $v1 = $format_directory."_notecontent.json";
    $summary = $note->{'summary'};
    $v2 = $format_directory."_notesummary.json";
    $content_file = fopen($v1, 'w');
    fwrite($content_file, json_encode($content));
    fclose($content_file);
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



}