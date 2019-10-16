<!-- List of elements
IDs:
    entry-create-main                     a main that contains all elements for create an entry
    entry-section-add                     a button to add a new section
    entry-reference-add                   a button to add new reference
Classes:
    create-main                           mains that contains all component to create a new article
    title-field                           editable divs for filling in the title
    tag-field                             editable divs for filling in tags
    introduction-container                divs that contains all elements for the introduction
    all-section                           divs that contains all sections for this entry
    a-group                               divs that contains all elements for creating a section
    entry-tool-bar                        divs contains all the tools as clickable element to add special content
    tool                                  divs needed to be clickable that adds special content to the section
    section-container                     divs contains all elements for a single section
    in-section-p                          ps for the content of a single section
    add-button                            buttons to add a specific editable component
    reference-container                   divs to contains all information about reference
    submit                                buttons to submit the new article
    entry-ref-list                        order lists for the references of an entry
Functions:
    addSpecialComponent(event, int)       add a special component to a section according to the int parameter
    addEntrySection()                     add a new section after the last one
    addEntryReference()                   add new item into the reference
    createEntry()                         check validation of the new entry and process the submission
-->
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../css/component.css">
        <link rel="stylesheet" type="text/css" href="../../css/create.css">
    </head>
    <body>
        <?php include_once '../../component/page-top.php'; ?>
        <main class="create-main" id="entry-create-main">
            <hr/>
            <?php include_once 'common-create.php'; ?>
            <div class="introduction-container">
                <h3>简介-Introduction</h3>
                <p contenteditable="true">填写简介 Fill Introduction Here</p>
            </div>
            <div class="all-sections">
                <div class="a-group">
                    <h3 contenteditable="true">小标题 Unit Title</h3>
                    <hr/>
                    <div class="entry-tool-bar">
                        <div class="tool" onclick="addSpecialComponent(event, 0)">列表</div>
                        <div class="tool" onclick="addSpecialComponent(event, 1)">表格</div>
                        <div class="tool" onclick="addSpecialComponent(event, 2)">图片</div>
                    </div>
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
    </body>
</html>

