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
                        <p class="note-content-p" contenteditable="true">
                            请在此添加内容 Please Fill Content Here
                        </p>
                    </div>
                </td>
            </tr>
        </table>
        <div class="summary-container">
            <h3>总结-Summary</h3>
            <div class="note-summary" contenteditable="true">
                总结 Summary
            </div>
        </div>
        <div class="note-comment">
            <h3>评论-Comments</h3>
            <div class="note-comment-content" contenteditable="true">
                请在此添加新的评论 Comment Here
            </div>
            <button class="add-button" id="note-comment-add" onclick="addNoteComment()">添加 Add</button>
        </div>
        <button class="submit" onclick="createNote()">提交 Submit</button>
    </main>
    <script src="../../javascript/note-create-js.js"></script>
    <script src="../../javascript/create-submit-js.js"></script>
    </body
</html>