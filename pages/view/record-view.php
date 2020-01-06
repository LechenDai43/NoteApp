<html>
<head>
    <link rel="stylesheet" type="text/css" href="../../css/component.css">
    <link rel="stylesheet" type="text/css" href="../../css/create.css">
</head>
<body>
<?php include_once '../../component/page-top.php'; ?>
<main class="create-main" id="record-create-main">
    <hr/>
    <?php include_once 'common-view.php'; ?>
    <div class="description-container">
        <h3>任务内容-Task Detail</h3>
        <?php
        $statement = "select record_id, task, summary from records where id = ".$id;
        $outcome = mysqli_query($mysqli, $statement);
        $row = mysqli_fetch_row($outcome);
        $record_id = $row[0];
        $task_directory = $row[1];
        $summary_directory = $row[2];
        $task_file = fopen($task_directory, 'r');
        $task_content = "";
        while (!feof($task_file)) {
            $task_content = $task_content.fgets($task_file);
        }
        echo "<p>".$task_content."</p>";
        ?>
    </div>
    <div class="processes-container">
        <?php
        $statement = "select thought from record_thoughts where record_id = ".$record_id;
        $outcome = mysqli_query($mysqli, $statement);
        $row = mysqli_fetch_row($outcome);
        while ($row != null) {
            $thought_directory = "../".$row[0];
            $thought_file = fopen($thought_directory, 'r');
            $thought_content = "";
            while (!feof($thought_file)) {
                $thought_content = $thought_content.fgets($thought_file);
            }
            $js = json_decode($thought_content);
            $i = 1;
            foreach ($js as $item) {
                echo "<div class = \"a-process\" id = \"proc-".$i."\"> <div class = \"a-plan\">";
                echo "<h3>计划-Plan</h3><p class = \"plan-content\">";
                echo $item->{'plan'};
                echo "</p></div><table class = \"try-detail\">";
                foreach ($item->{'implementation'} as $value) {
                    echo "<tr><td><p class = \"proc-".$i."-imp an-implement\">";
                    echo $value->{'try'};
                    echo "</p></td><td><p class = \"proc - ".$i."-rev an-review\">";
                    echo $value->{'review'};
                    echo "</p></td></tr>";
                }
                echo "</table></div>";
                $i++;
            }
            $row = mysqli_fetch_row($outcome);
        }
        ?>
        <button class="add-button" id="plan-add" onclick="addRecordPlan()">添加 Add</button>
    </div>
    <div class="record-summary-container">
        <h3>总结-Summary</h3>
        <div class="record-summary">
            <?php
            $summary_file = fopen($summary_directory, 'r');
            $summary_content = "";
            while (!feof($summary_file)) {
                $summary_content = $summary_content.fgets($summary_file);
            }
            echo $summary_content;
            mysqli_close($mysqli);
            ?>
        </div>
    </div>
</main>
<script src="../../javascript/record-create-js.js"></script>
<script src="../../javascript/create-submit-js.js"></script>
</body>
</html>