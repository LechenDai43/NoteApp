<!-- List of elements
IDs:
    record-create-main                  a main that contains all elements for create a record
    implement-add-proc-#                a button to add a new implementation of plan #
    plan-add                            a button to add a new plan for the task
    proc-#                              a div for one process
Classes:
    create-main                         mains that contains all component to create a new article
    title-field                         editable divs for filling in the title
    tag-field                           editable divs for filling in tags
    add-button                          buttons to add a specific editable component
    description-container               divs contain all elements for the task description
    processes-container                 divs contain all elements for how the task gets done
    a-process                           divs contain elements for the plan and the implementation of that plan
    a-plan                              divs contain a plan about how to solve the task
    an-implement                        divs contain one of several implementations of one plan for the task
    a-review                            divs contain a review of a implementation of one plan for the task
    record-summary-container            divs contain all elements for the summary part
    record-summary                      divs contain the content of the summary
    submit                              buttons to submit the new article
    plan-content                        paragraphs to store the content of plans
    proc-#-imp                          implementations for process #
    proc-#-rev                          reviews for process #
Functions:
     addRecordImplement(event)          add a new implementation for the plan
     addRecordPlan()                    add a new plan for the task
     createRecord()                     check validation and process the submission
-->
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../css/component.css">
        <link rel="stylesheet" type="text/css" href="../../css/create.css">
    </head>
    <body>
        <?php include_once '../../component/page-top.php'; ?>
        <main class="create-main" id="record-create-main">
            <hr/>
            <?php include_once 'common-create.php'; ?>
            <div class="description-container">
                <h3>任务内容-Task Detail</h3>
                <p contenteditable="true">详细内容 Details</p>
            </div>
            <div class="processes-container">
                <div class="a-process" id="proc-1">
                    <div class="a-plan">
                        <h3>计划-Plan</h3>
                        <p contenteditable="true" class="plan-content">计划内容 Plan Details</p>
                    </div>
                    <table>
                        <tr>
                            <td><p contenteditable="true" class="proc-1-imp an-implement">实施情况 Implement Detail</p></td>
                            <td><p contenteditable="true" class="proc-1-rev a-review">反思 Review</p></td>
                        </tr>
                    </table>
                    <button class="add-button" id="implement-add-proc-1" onclick="addRecordImplement(event)">添加 Add</button>
                </div>
                <button class="add-button" id="plan-add" onclick="addRecordPlan()">添加 Add</button>
            </div>
            <div class="record-summary-container">
                <h3>总结-Summary</h3>
                <div class="record-summary" contenteditable="true">
                    总结 Summary
                </div>
            </div>
            <button class="submit" onclick="createRecord()">提交 Submit</button>
        </main>
        <script src="../../javascript/record-create-js.js"></script>
    </body>
</html>