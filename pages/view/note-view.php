<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../css/component.css">
        <link rel="stylesheet" type="text/css" href="../../css/create.css">
    </head>
    <body>
    <?php include_once '../../component/page-top.php'; ?>
    <main class="create-main" id="note-create-main">
        <hr/>
        <?php include_once 'common-view.php'; ?>
        <h3>笔记-Note</h3>
        <table class="note-root-table">
            <tr>
                <td class="note-root-left-column">
                    Cues
                </td>
                <td>
                    笔记内容 - Content
                </td>
            </tr>
            <tr>
                <td class="note-root-left-column">
                    <div class="cue-container">
                        <?php
                        $statement = "select note_id, note, summary from notes where id = ".$id;
                        $outcome = mysqli_query($mysqli, $statement);
                        $row = mysqli_fetch_row($outcome);
                        $note_id = $row[0];
                        $content_directory = "../".$row[1];
                        $summary_directory = "../".$row[2];
                        $statement = "select cue_id from cue_ref where note_id = ".$note_id;
                        $outcome = mysqli_query($mysqli, $statement);
                        $row = mysqli_fetch_lengths($outcome);
                        while ($row != null) {
                            $cue_id = $row[0];
                            $statement = "select cue from cues where cue_id = ".$cue_id;
                            $outcome1 = mysqli_query($mysqli, $statement);
                            $cue = mysqli_fetch_row($outcome1)[0];
                            echo "<p class=\"cue-content\">&#8226".$cue."</p>";
                            $row = mysqli_fetch_lengths($outcome);
                        }
                        ?>
                    </div>
                </td>
                <td>
                    <div class="note-container">
                        <?php
                        include_once "../../backend/functions-for-view-and-edit.php";
                        $content_file = fopen($content_directory, 'r');
                        $note_content = "";
                        while (!feof($content_file)) {
                            $note_content = $note_content.fgets($content_file);
                        }
                        createNoteContent(json_decode($note_content));
                        ?>
                    </div>
                </td>
            </tr>
        </table>
        <div class="summary-container">
            <h3>总结-Summary</h3>
            <div class="note-summary">
                <?php
                sleep(0.25);
                $summary_file = fopen($summary_directory, 'r');
                $summary_content = "";
                while (!feof($summary_file)) {
                    $summary_content = $summary_content.fgets($summary_file);
                }
                echo $summary_content;
                ?>
            </div>
        </div>
        <div class="note-comment">
            <h3>评论-Comments</h3>
            <?php
            sleep(0.5);
            $statement = "select comment from note_comments where note_id = ".$note_id;
            $outcome = mysqli_query($mysqli, $statement);
            $row = mysqli_fetch_row($outcome);
            while ($row != null) {
                $comment_directory = $row[0];
                $comment_file = fopen($comment_directory, 'r');
                $comment_content = "";
                while (!feof($comment_file)) {
                    $comment_content = $comment_content.fgets($comment_file);
                }
                echo "<div class = \"note-comment-content\">";
                echo $comment_content;
                echo "</div>";
                $row = mysqli_fetch_row($outcome);
            }
            mysqli_close($mysqli);
            ?>
        </div>
    </main>
    <script src="../../javascript/note-create-js.js"></script>
    <script src="../../javascript/create-submit-js.js"></script>
    </body
</html>