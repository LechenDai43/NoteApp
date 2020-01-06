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

            $row = mysqli_fetch_row($outcome);
        }
        ?>
        <div class="a-process" id="proc-1">
            <div class="a-plan">
                <h3>计划-Plan</h3>
                <p contenteditable="true" class="plan-content">计划内容 Plan Details</p>
            </div>
            <table class="try-detail">
                <tr>
                    <td><p contenteditable="true" class="proc-1-imp an-implement">实施情况 Implement Detail</p></td>
                    <td><p contenteditable="true" class="proc-1-rev a-review">反思 Review</p></td>
                </tr>
            </table>
            <button class="add-button" id="implement-add-proc-1" onclick="addRecordImplement(event)">添加 Add</button>
        </div>
        <button class="add-button" id="plan-add" onclick="addRecordPlan()">添加 Add</button>
    </div>
    <div class="record-summary-container">
        <h3>总结-Summary</h3>
        <div class="record-summary" contenteditable="true">
            总结 Summary
        </div>
    </div>
    <button class="submit" onclick="createRecord()">提交 Submit</button>
</main>
<script src="../../javascript/record-create-js.js"></script>
<script src="../../javascript/create-submit-js.js"></script>
</body>
</html>