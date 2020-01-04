<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../css/component.css">
        <link rel="stylesheet" type="text/css" href="../../css/create.css">
    </head>
    <body>
        <?php include_once '../../component/page-top.php'; ?>
        <main class="create-main" id="entry-create-main">
            <hr/>
            <?php include_once 'common-view.php'; ?>
            <div class="introduction-container">
                <h3>简介-Introduction</h3>
                <p class="introduction-p">
                    <?php

                    ?>
                </p>
            </div>
            <div class="all-sections">
                <div class="a-group">
                    <h3 contenteditable="true">小标题 Unit Title</h3>
                    <hr/>
                    <div class="section-container">
                        <p class="in-section-p" contenteditable="true">章节内容 Chapter Content</p>
                    </div>
                </div>
                <button class="add-button" id="entry-section-add" onclick="addEntrySection()">添加 Add</button>
            </div>
            <div class="reference-container">
                <h4>信息来源-Reference</h4>
                <ol class="entry-ref-list">
                    <li contenteditable="true">来源 Recourse</li>
                </ol>
                <button class="add-button" id="entry-reference-add" onclick="addEntryReference()">添加 Add</button>
            </div>
            <button class="submit" onclick="createEntry()">提交 Submit</button>
        </main>
        <script src="../../javascript/entry-create-js.js"></script>
        <script src="../../javascript/create-submit-js.js"></script>
    </body>
</html>
