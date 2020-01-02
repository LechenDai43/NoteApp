<?php
if (isset($_POST['js'])) {
    include_once 'mysql-connection.php';
    include_once 'saving-common.php';

    $directory_index = 0;
    $task = $note->{'task'};
    $task_directory = $format_directory."-".$directory_index.".json";
    array_push($files, $task_directory);
    $v1 = $task_directory;
    $directory_index++;
    $summary = $note->{'summary'};
    $summary_directory = $format_directory."-".$directory_index.".json";
    array_push($files, $summary_directory);
    $v2 = $summary_directory;
    $directory_index++;

    $statement = "insert into records(id, task, summary) value(".$id.",\"".$task_directory."\",\"".$summary_directory."\")";
    $outcome = mysqli_query($mysqli, $statement);
    if ($outcome != true) {
        echo mysqli_error($mysqli);
        $statement = "delete from articles where id = ".$id;
        $outcome = mysqli_query($mysqli, $statement);
        return;
    }
    $record_id = mysqli_insert_id($mysqli);

//    $content_file = fopen($content_directory, 'w');
//    fwrite($content_file, $_POST['js']);
//    fclose($content_file);
//    $summary_file = fopen($summary_directory, 'w');
//    fwrite($summary_file, $summary);
//    fclose($summary_file);
}
