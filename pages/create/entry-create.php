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
            <div class="introduction-container">
                <h3>简介-Introduction</h3>
                <p contenteditable="true">填写简介 Fill Introduction Here</p>
            </div>
            <div class="all-sections">
                <div class="a-group">
                    <h3 contenteditable="true">小标题-Unit Title</h3>
                    <hr/>
                    <div class="entry-tool-bar">

                    </div>
                    <div class="section-container">
                        <p class="in-section-p" contenteditable="true">章节内容 Chapter Content</p>
                    </div>
                </div>
                <button class="add-button">添加 Add</button>
            </div>
            <div class="reference-container">
                <h4>信息来源-Reference</h4>
                <ol>
                    <li contenteditable="true">来源 Recourse</li>
                </ol>
                <button class="add-button">添加 Add</button>
            </div>
        </main>
    </body>
</html>

