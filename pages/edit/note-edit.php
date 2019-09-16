<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../css/component.css">
        <style>
            #note-edit-main {
                margin-top: 6%;
                padding-right: 10%;
                padding-left: 10%;
            }
        </style>
    </head>
    <body>
        <?php include_once '../../component/page-top.php'; ?>
        <main class="edit-main" id="note-edit-main">
            <hr>
            <?php include_once 'common-edit.php'; ?>
            <h3>笔记-Note</h3>
            <table>
                <tr>
                    <td>
                        Cues
                    </td>
                    <td>
                        <div class="note-tool-bar">
                            <div class="tool">列表</div>
                            <div class="tool">表格</div>
                            <div class="tool">矩阵</div>
                            <div class="tool">流程图</div>
                            <div class="tool">树状图</div>
                            <div class="tool">环状图</div>
                            <div class="tool">金字塔</div>
                            <div class="tool">文氏图</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="cue-container">
                            <p class="cue-content" contenteditable="true">
                                &#8226
                            </p>
                        </div>
                    </td>
                    <td>
                        <div class="note-container">
                            <div class="note-content-container">
                                <p class="note-content-p" contenteditable="true">
                                    请在此添加内容 Please Fill Content Here
                                </p>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <h3>总结-Summary</h3>
            <div class="note-summary" contenteditable="true">
                总结 Summary
            </div>
            <h3>评论-Comments</h3>
            <div class="note-comment">
                <div class="note-comment-content" contenteditable="true">
                    请在此添加新的评论 Comment Here
                </div>
            </div>
        </main>
    </body
</html>