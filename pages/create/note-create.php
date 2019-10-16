<!-- List of elements
IDs:
    note-create-main               a main that contains all component to create a new note
    note-cue-add                   a button to add new item into the cue list
    note-comment-add               a button to add new comment
Classes:
    create-main                    mains that contains all component to create a new article
    title-field                    editable divs for filling in the title
    tag-field                      editable divs for filling in tags
    note-tool-bar                  divs contains all the tools as clickable element to add special content
    tool                           divs needed to be clickable that adds special content to the section
    cue-container                  divs contains all component for note cue
    cue-content                    editable divs contains the content of note cue
    note-container                 divs contains all component for note content
    note-content-p                 editable divs contains text content of the note
    summary-container              divs contains all component for summary
    note-summary                   editable divs contains note summary
    note-comment                   divs contains all component for comment **the so-called comment is others' notes
    note-comment-content           editable divs contains comment content
    add-button                     buttons to add a specific editable component
    submit                         buttons to submit the new article
    note-process                   divs contain a whole process
    note-process-input-number      divs show the number of steps of the corresponding process
    note-process-input-label       paragraphs used as the label of note-process-input-number
    note-process-input-field       editable paragraphs that allow user to define the number of steps of a process
    note-process-input-error       errors that are shown only if user enter an invalid number of steps of a process
    note-process-main-container    the containers that contain the content of a process
    note-process-single-process    divs that contains a single step of a process
    note-process-arrow             images that shows an arrow between steps
    note-matrix                    divs that contain a whole process
    matrix-neg-x-axis              the negative direction of x axis of a matrix
    matrix-mid                     contains the content and the y axis of a matrix
Functions:
    addSpecialElement(int)         add a special component to the note content according to the int parameter
    addNoteCue()                   add a new item into the note cues
    addNoteComment()               add a new comment into the note comments
    createNote()                   process the submission of a new note, check the validation and send content to php
-->
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../css/component.css">
        <link rel="stylesheet" type="text/css" href="../../css/create.css">
    </head>
    <body>
        <?php include_once '../../component/page-top.php'; ?>
        <main class="create-main" id="note-create-main">
            <hr/>
            <?php include_once 'common-create.php'; ?>
            <h3>笔记-Note</h3>
            <table>
                <tr>
                    <td>
                        Cues
                    </td>
                    <td>
                        <div class="note-tool-bar">
                            <div class="tool" onclick="addSpecialElement(0)">列表</div>
                            <div class="tool" onclick="addSpecialElement(1)">表格</div>
                            <div class="tool" onclick="addSpecialElement(2)">矩阵</div>
                            <div class="tool" onclick="addSpecialElement(3)">流程图</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="cue-container">
                            <p class="cue-content" contenteditable="true">
                                &#8226
                            </p>
                            <button class="add-button" id="note-cue-add" onclick="addNoteCue()">添加 Add</button>
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
    </body
</html>