<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../css/component.css">
        <link rel="stylesheet" type="text/css" href="../../css/create.css">
    </head>
    <body>
        <?php include_once '../../component/page-top.php'; ?>
        <main class="edit-main" id="note-edit-main">
            <hr/>
            <?php include_once 'common-create.php'; ?>
            <div id="description-container">
                <h3>任务内容-Task Detail</h3>
                <p contenteditable="true">详细内容 Details</p>
            </div>
            <div id="processes-container">
                <div class="a-process">
                    <di class="a-plan">
                        <h3>计划-Plan</h3>
                        <p contenteditable="true">计划内容 Plan Details</p>
                    </di>
                    <table>
                        <tr>
                            <td><p contenteditable="true">实施情况 Implement Detail</p></td>
                            <td><p contenteditable="true">反思 Review</p></td>
                        </tr>
                    </table>
                    <button class="add-button">添加 Add</button>
                </div>
                <button class="add-button">添加 Add</button>
            </div>
            <div id="record-summary-container">
                <h3>总结-Summary</h3>
                <div class="record-summary" contenteditable="true">
                    总结 Summary
                </div>
            </div>
        </main>
    </body>
</html>