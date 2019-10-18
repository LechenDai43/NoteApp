<!-- List of elements
IDs:
    note-create-main               a main that contains all component to create a new note
    note-cue-add                   a button to add new item into the cue list
    note-comment-add               a button to add new comment
Classes:
    note-tool-bar                  divs contains all the tools as clickable element to add special content
    tool                           divs needed to be clickable that adds special content to the section
    note-root-table                table contains the main part of the note
    cue-container                  divs contains all component for note cue
    cue-content                    editable divs contains the content of note cue
    note-container                 divs contains all component for note content
    note-content-p                 editable divs contains text content of the note
    summary-container              divs contains all component for summary
    note-summary                   editable divs contains note summary
    note-comment                   divs contains all component for comment **the so-called comment is others' notes
    note-comment-content           editable divs contains comment content
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
    matrix-pos-y-axis              the positive direction of y axis of a matrix
    matrix-left-top                table cells that contain the content of (-x,+y)
    matrix-right-top               table cells that contain the content of (+x,+y)
    matrix-left-bottom             table cells that contain the content of (-x,-y)
    matrix-right-bottom            table cells that contain the content of (+x,-y)
    matrix-neg-y-axis              the negative direction of y axis of a matrix
    matrix-pos-x-axis              the positive direction of x axis of a matrix
    note-list                      lists that contain a whole list
    note-list-item                 elements in a list
    list-item-add                  add one more element in list
    note-table                     tables that contain a whole table
    note-table-head                the table head of a table
    note-table-header              table cells in the table head of a table
    table-column-add               the button to add a new column into a table
    note-table-body                a row of the body of a table
    note-table-cells               table cells that belong to the table body
    table-row-add                  button to add a new row into a table
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
            <table class="note-root-table">
                <tr>
                    <td class="note-root-left-column">
                        Cues
                    </td>
                    <td>
                        <div class="note-tool-bar">
                            <div class="tool" onclick="addSpecialElement(1)">列表</div>
                            <div class="tool" onclick="addSpecialElement(0)">表格</div>
                            <div class="tool" onclick="addSpecialElement(2)">矩阵</div>
                            <div class="tool" onclick="addSpecialElement(3)">流程图</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="note-root-left-column">
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