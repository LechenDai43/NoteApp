<?php
if (isset($_POST['js'])) {
    include_once 'mysql-connection.php';
    include_once 'saving-common.php';

    if ($error == -1) {

        $directory_index = 0;
        $task = $note->{'task'};
        $task_directory = $format_directory . "-" . $directory_index . ".json";
        array_push($files, $task_directory);
        $v1 = $task_directory;
        $directory_index++;
        $summary = $note->{'summary'};
        $summary_directory = $format_directory . "-" . $directory_index . ".json";
        array_push($files, $summary_directory);
        $v2 = $summary_directory;
        $directory_index++;

        $statement = "insert into records(id, task, summary) value(" . $id . ",\"" . $task_directory . "\",\"" . $summary_directory . "\")";
        $outcome = mysqli_query($mysqli, $statement);
        $e = mysqli_error($mysqli);
        if (!empty($e)) {
            $error = $e;
            $statement = "delete from articles where id = " . $id;
            $outcome = mysqli_query($mysqli, $statement);
            mysqli_close($mysqli);
        } else {
            $record_id = mysqli_insert_id($mysqli);

            $task_file = fopen($task_directory, 'w');
            fwrite($task_file, $task);
            fclose($task_file);
            $summary_file = fopen($summary_directory, 'w');
            fwrite($summary_file, $summary);
            fclose($summary_file);

            $plans = $_POST['str_contents'];
            foreach ($plans as $value) {
                $plan_directory = $format_directory . "-" . $directory_index . ".json";
                $v3 = $plan_directory;
                $statement = "insert into record_thoughts(record_id, thought) value(" . $record_id . ",\"" . $v3 . "\")";
                $outcome = mysqli_query($mysqli, $statement);
                if ($outcome != true) {
                    continue;
                }
                array_push($files, $plan_directory);
                $directory_index++;
                $comment_file = fopen($plan_directory, 'w');
                fwrite($comment_file, $value);
                fclose($comment_file);
            }

            //echo "All done";
        }
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