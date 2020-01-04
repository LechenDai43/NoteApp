<?php include_once '../../backend/mysql-connection.php'; ?>
<h3>标题-Title</h3>
<div class="title-field">
    <?php
    $id = $_POST['id'];
    $statement = "select title from articles where id = ".$id;
    $outcome = mysqli_query($mysqli, $statement);
    $row = mysqli_fetch_row($outcome);
    $title = $row[0];
    echo $title;
    ?>
</div>
<h3>标签-Tags</h3>
<div class="tag-field">
    <?php
    $statement = "select tag_id from tag_ref where article_id = ".$id;
    $outcome = mysqli_query($mysqli, $statement);
    $row = mysqli_fetch_row($outcome);
    $pos = 0;
    while ($row != null) {
        $tag_id = $row[0];
        $statement = "select tag from tags where tag_id = ".$tag_id;
        $outcome_1 = mysqli_query($mysqli, $statement);
        $tag = mysqli_fetch_row($outcome_1)[0];
        if ($pos !=0 ) {
            echo ";";
        }
        echo $tag;
        $pos++;
    }
    ?>
</div>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
