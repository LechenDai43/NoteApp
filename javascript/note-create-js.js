function addNoteCue() {
    var newCue = document.createElement("p");
    newCue.classList.add("cue-content");
    newCue.setAttribute("contenteditable", "true");
    newCue.innerHTML = "&#8226";
    var parent = document.getElementsByClassName("cue-container")[0];
    var youngBro = document.getElementById("note-cue-add");
    parent.insertBefore(newCue, youngBro);
}

function addNoteComment() {
    var newComment = document.createElement("div");
    newComment.classList.add("note-comment-content");
    newComment.setAttribute("contenteditable", "true");
    newComment.innerHTML = "请在此添加新的评论 Comment Here";
    var parent = document.getElementsByClassName("note-comment")[0];
    var youngBro = document.getElementById("note-comment-add");
    parent.insertBefore(newComment, youngBro);
}

function addSpecialElement(key) {
    switch (key) {
        case 0:
            addTable();
            break;
        case 1:
            addList();
            break;
        case 2:
            addMatrix();
            break;
        case 3:
            addProcess();
            break;
    }
    var newContent = document.createElement("p");
    newContent.classList.add("note-content-p");
    newContent.setAttribute("contenteditable", "true");
    newContent.innerHTML = "请在此添加内容 Please Fill Content Here";
    var parent = document.getElementsByClassName("note-container")[0];
    parent.append(newContent);
}

function addProcess() {
    var process = document.createElement("div");
    process.classList.add("note-process");

    var input = document.createElement("div");
    input.classList.add("note-process-input-number");
    var label = document.createElement("p");
    label.classList.add("note-process-input-label");
    label.innerHTML = "流程数量-Number of Process";
    input.append(label);
    var field = document.createElement("p");
    field.classList.add("note-process-input-field");
    field.setAttribute("contenteditable", "true");
    field.innerHTML = "3";
    field.onkeyup = function() {changeProcessNumber(event)};
    input.append(field);
    var error = document.createElement("div");
    error.classList.add("note-process-input-error");
    input.append(error);
    process.append(input);

    var main = document.createElement("div");
    main.classList.add("note-process-main-container");
    for (var i = 0; i < 3; i++) {
        var box = document.createElement("div");
        box.classList.add("note-process-single-process");
        box.setAttribute("contenteditable", "true");
        box.innerHTML = "操作步骤 Step";
        main.append(box);
        if (i != 2) {
            var arrow = document.createElement("img");
            arrow.setAttribute("src", "../../image/note-process-arrow.png");
            arrow.setAttribute("height", "25");
            arrow.classList.add("note-process-arrow");
            main.append(arrow);
        }
    }
    process.append(main);

    var remove = document.createElement("button");
    remove.innerText = "移除 Remove";
    remove.classList.add("remove-btn");
    remove.setAttribute("onclick", "removeElement(event)");
    process.append(remove);


    var parent = document.getElementsByClassName("note-container")[0];
    parent.append(process);
}

function changeProcessNumber(event) {
    var process = event.target.parentElement.parentElement;
    var input = event.target.parentElement;
    var number = event.target.innerHTML;
    var num = parseInt(number);

    if (isNaN(num)) {
        var error = input.childNodes[2];
        error.innerHTML = "请输入数字-Please enter a number";
    } else if (num <= 0) {
        var error = input.childNodes[2];
        error.innerHTML = "请输入整数-Please enter a positive number";
    } else if (num > 9){
        var error = input.childNodes[2];
        error.innerHTML = "步骤不要大于9-Step number should not be greater than 9";
    } else {
        var error = input.childNodes[2];
        error.innerHTML = "";
        var main = process.childNodes[1];
        var total = (main.childNodes.length + 1) / 2;
        if (num > total) {
            for (total; total < num; total++) {
                var arrow = document.createElement("img");
                arrow.setAttribute("src", "../../image/note-process-arrow.png");
                arrow.setAttribute("height", "25");
                arrow.classList.add("note-process-arrow");
                main.append(arrow);
                var box = document.createElement("div");
                box.classList.add("note-process-single-process");
                box.setAttribute("contenteditable", "true");
                box.innerHTML = "操作步骤 Step";
                main.append(box);
            }
        } else if (num < total) {
            for (total; total > num; total--) {
                var box = main.childNodes[main.childNodes.length - 1];
                main.removeChild(box);
                var arrow = main.childNodes[main.childNodes.length - 1];
                main.removeChild(arrow);
            }
        }
    }
}

function addMatrix() {
    var matrix = document.createElement("div");
    matrix.classList.add("note-matrix");

    var left = document.createElement("div");
    left.classList.add("matrix-neg-x-axis");
    left.setAttribute("contenteditable", "true");
    left.innerHTML = "-X";
    matrix.append(left);

    var table = document.createElement("table");
    table.classList.add("matrix-mid");
    var r1 = document.createElement("tr");
    var py = document.createElement("td");
    py.classList.add("matrix-pos-y-axis");
    py.setAttribute("contenteditable", "true");
    py.setAttribute("colspan", "2");
    py.innerHTML = "+Y";
    r1.append(py);
    table.append(r1);

    var r2 = document.createElement("tr");
    var lt = document.createElement("td");
    lt.classList.add("matrix-left-top");
    lt.setAttribute("contenteditable", "true");
    lt.innerHTML = "-X & +Y";
    r2.append(lt);
    var rt = document.createElement("td");
    rt.classList.add("matrix-right-top");
    rt.setAttribute("contenteditable", "true");
    rt.innerHTML = "+X & +Y";
    r2.append(rt);
    table.append(r2);

    var r3 = document.createElement("tr");
    var lb = document.createElement("td");
    lb.classList.add("matrix-left-bottom");
    lb.setAttribute("contenteditable", "true");
    lb.innerHTML = "-X & -Y";
    r3.append(lb);
    var rb = document.createElement("td");
    rb.classList.add("matrix-right-bottom");
    rb.setAttribute("contenteditable", "true");
    rb.innerHTML = "+X & -Y";
    r3.append(rb);
    table.append(r3);

    var r4 = document.createElement("tr");
    var ny = document.createElement("td");
    ny.classList.add("matrix-neg-y-axis");
    ny.setAttribute("contenteditable", "true");
    ny.setAttribute("colspan", "2");
    ny.innerHTML = "-Y";
    r4.append(ny);
    table.append(r4);
    matrix.append(table);

    var right = document.createElement("div");
    right.classList.add("matrix-pos-x-axis");
    right.setAttribute("contenteditable", "true");
    right.innerHTML = "+X";
    matrix.append(right);

    var remove = document.createElement("button");
    remove.innerText = "移除 Remove";
    remove.classList.add("remove-btn");
    remove.setAttribute("onclick", "removeElement(event)");
    matrix.append(remove);

    var parent = document.getElementsByClassName("note-container")[0];
    parent.append(matrix);
}

function addList() {
    var list = document.createElement("ul");
    list.classList.add("note-list");

    var li = document.createElement("li");
    li.classList.add("note-list-item");
    li.setAttribute("contenteditable", "true");
    li.innerHTML = "内容 Content";

    list.append(li);

    var btn = document.createElement("button");
    btn.classList.add("add-button");
    btn.classList.add("list-item-add");
    btn.onclick = function() {addNoteListItem(event)};
    btn.innerHTML = "+";
    list.append(btn);

    var remove = document.createElement("button");
    remove.innerText = "移除 Remove";
    remove.classList.add("remove-btn");
    remove.setAttribute("onclick", "removeElement(event)");
    list.append(remove);

    var parent = document.getElementsByClassName("note-container")[0];
    parent.append(list);
}

function addNoteListItem(event) {
    var list = event.target.parentElement;
    var youngBro = event.target;
    var li = document.createElement("li");
    li.classList.add("note-list-item");
    li.setAttribute("contenteditable", "true");
    li.innerHTML = "内容 Content";

    list.insertBefore(li, youngBro);
}

function addTable() {
    var table = document.createElement("table");
    table.classList.add("note-table");

    var thead = document.createElement("thead");
    var trh = document.createElement("tr");
    trh.classList.add("note-table-head");
        var left = document.createElement("th");
        var lp = document.createElement("p");
        lp.classList.add("note-table-header");
        lp.setAttribute("contenteditable", "true");
        lp.innerHTML = "字节 Head";
        left.append(lp);

        var right = document.createElement("th");
        var rp = document.createElement("p");
        rp.classList.add("note-table-header")
        rp.setAttribute("contenteditable", "true");
        rp.innerHTML = "字节 Head";
        right.append(rp);

        var addCol = document.createElement("th");
        var btnCol = document.createElement("button");
        btnCol.classList.add("add-button");
        btnCol.classList.add("table-column-add");
        btnCol.onclick = function() {addNoteColumn(event)};
        btnCol.innerHTML = "+";
        addCol.append(btnCol);
    trh.append(left);
    trh.append(right);
    trh.append(addCol);
    thead.append(trh);
    table.append(thead);

    var tbody = document.createElement("tbody");
    for (var i = 0; i < 2; i++) {
        var row = document.createElement("tr");
        row.classList.add("note-table-body");
        for (var j = 0; j < 2; j++) {
            var cell = document.createElement("td");
            var p = document.createElement("p");
            p.classList.add("note-table-cells");
            p.setAttribute("contenteditable", "true");
            p.innerHTML = "内容 Content";
            cell.append(p);
            row.append(cell);
        }
        tbody.append(row);
    }
    var btnRow = document.createElement("button");
    btnRow.classList.add("add-button");
    btnRow.classList.add("table-row-add");
    btnRow.onclick = function() {addNoteRow(event)};
    btnRow.innerHTML = "+";
    var tr = document.createElement("tr");
    tr.classList.add("table-note-btn-row");
    var td = document.createElement("td");
    td.append(btnRow);
    tr.append(td);
    tbody.append(tr);
    table.append(tbody);

    var remove = document.createElement("button");
    remove.innerText = "移除 Remove";
    remove.classList.add("remove-btn");
    remove.setAttribute("onclick", "removeElement(event)");
    table.append(remove);

    var parent = document.getElementsByClassName("note-container")[0];
    parent.append(table);
}

function addNoteColumn(event) {
    var table = event.target.parentElement.parentElement.parentElement.parentElement;
    var youngBro = event.target.parentElement;
    var thead = table.childNodes[0];
    var tbody = table.childNodes[1];

    var th = document.createElement("th");
    var ph = document.createElement("p");
    ph.classList.add("note-table-header")
    ph.setAttribute("contenteditable", "true");
    ph.innerHTML = "字节 Head";
    th.append(ph);
    thead.childNodes[0].insertBefore(th, youngBro);

    for (var i = 0; i < tbody.childNodes.length - 1; i++) {
        var row = tbody.childNodes[i];
        var cell = document.createElement("td");
        var p = document.createElement("p");
        p.classList.add("note-table-cells");
        p.setAttribute("contenteditable", "true");
        p.innerHTML = "内容 Content";
        cell.append(p);
        row.append(cell);
    }
}

function addNoteRow(event) {
    var youngBro = event.target.parentElement.parentElement;
    var tbody = youngBro.parentElement;

    var length = tbody.childNodes[0].childNodes.length;
    var row = document.createElement("tr");
    row.classList.add("note-table-head");
    for (var j = 0; j < length; j++) {
        var cell = document.createElement("td");
        var p = document.createElement("p");
        p.classList.add("note-table-cells");
        p.setAttribute("contenteditable", "true");
        p.innerHTML = "内容 Content";
        cell.append(p);
        row.append(cell);
    }

    tbody.insertBefore(row, youngBro);
}

/*
    Below is the code for the followings:
    1. checking validation of inputs;
    2. making inputs into json;
    3. send inputs-json to backend.
 */

function createNote() {
    var js = checkCommon();
    if (!js) {
        return;
    }

    js['type'] = 'note';

    var cues = document.getElementsByClassName("cue-content");
    var cue_arr = [];
    for (var i = 0; i < cues.length; i++) {
        var line = cues[i].innerHTML;
        line = line.replace("•", "");
        line = line.trimLeft().trimRight();
        if (line === "") {
            continue;
        }
        cue_arr.push(line);
    }
    if (cue_arr.length === 0) {
        alert("Please fill out cue.");
        return;
    }
    js["cue"] = cue_arr;

    var contents_e = document.getElementsByClassName("note-container")[0].childNodes;
    var contents = [];
    for (var i = 1; i < contents_e.length; i++) {
        if (i !== 2) {
            var element = contents_e[i];
            var js_back;
            if (element.classList.contains("note-content-p")) {
                js_back = packNoteContent(element);
                if (!js_back) {
                    return;
                }
                contents.push(js_back);
            } else if (element.classList.contains("note-list")) {
                js_back = packNoteList(element);
                if (!js_back) {
                    return;
                }
                contents.push(js_back);
            } else if (element.classList.contains("note-table")) {
                js_back = packNoteTable(element);
                if (!js_back) {
                    return;
                }
                contents.push(js_back);
            } else if (element.classList.contains("note-matrix")) {
                js_back = packNoteMatrix(element);
                if (!js_back) {
                    return;
                }
                contents.push(js_back);
            } else if (element.classList.contains("note-process")) {
                js_back = packNoteProcess(element);
                if (!js_back) {
                    return;
                }
                contents.push(js_back);
            } else {
                console.log(element);
                alert("Unidentified element.")
                return;
            }
        }
    }
    js['content'] = contents;

    var sum = document.getElementsByClassName("note-summary")[0].innerHTML;
    sum = sum.trimRight().trimLeft();
    if (sum === "总结 Summary" || sum.length < 1) {
        alert("Please fill in summary.")
        return;
    }
    js['summary'] = sum;

    var comments = document.getElementsByClassName("note-comment-content");
    var comment = [];
    for (var i = 0; i < comments.length; i++) {
        var tem = packNoteComment(comments[i]);
        if (!tem) {
            continue;
        }
        comment.push(tem);
    }
    js['comment'] = comment;

    $.ajax({
        url: '../../backend/note-create-php.php',
        data: {'js': JSON.stringify(js)},
        type: 'POST',
        success: function (response) {
            document.getElementsByTagName("body")[0].innerHTML = response;
        }     
    });
}

function packNoteContent(element) {
    var content = element.innerHTML;
    content = content.trimLeft().trimRight();
    if (content.length === 0 || content === "请在此添加内容 Please Fill Content Here") {
        alert("Please fill in content.");
        return false;
    }
    var result = {};
    result['type'] = 'paragraph';
    result['content'] = content;
    return result;
}

function packNoteList(element) {
    var items = element.childNodes;
    var item = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains("note-list-item")) {
            var value = items[i].innerHTML;
            value = value.trimRight().trimLeft();
            if (value.length === 0 || value === "内容 Content") {
                continue;
            }
            item.push(value);
        }
    }
    if (item.length === 0) {
        alert("Please add at least on item in the list.");
        return false;
    }
    var result = {};
    result['type'] = 'list';
    result['content'] = item;
    return result;
}

function packNoteTable(element) {
    var head = [], len = 0;
    var thead = element.childNodes[0].childNodes[0].childNodes;
    for (var i = 0; i < thead.length - 1; i++) {
        var value = thead[i].childNodes[0].innerText;
        value = value.trimLeft().trimRight();
        if (value.length < 1 || value === "字节 Head") {
            break;
        }
        head.push(value);
        len++;
    }
    if (len === 0) {
        alert("There is no valid table head.");
        return false;
    }
    var tbody = element.childNodes[1].childNodes;
    var table = [];
    for (var i = 0; i < tbody.length - 1; i++) {
        var row = {};
        var eles = tbody[i].childNodes;
        var count = 0;
        for (var j = 0; j < len; j++) {
            var value = eles[j].innerText;
            value = value.trimLeft().trimRight();
            if (value.length === 0 || value === "内容 Content") {
                row[head[j]] = "N/A";
            } else {
                row[head[j]] = value;
                count++;
            }
        }
        if (count > 0) {
            table.push(row);
        }
    }
    if (table.length < 1) {
        alert("Please fill some data into the table.");
        return false;
    }
    var result = {};
    result['type'] = "table";
    result['head'] = head;
    result['table'] = table;
    return result;
}

function packNoteMatrix(element) {
    var x = {}, y = {};

    var value = element.childNodes[0].innerHTML;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "-X") {
        alert("Please fill in the negative x value.");
        return false;
    }
    x['negative'] = value;
    value = element.childNodes[2].innerHTML;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "+X") {
        alert("Please fill in the positive x value.");
        return false;
    }
    x['positive'] = value;

    value = element.childNodes[1].childNodes[0].innerText;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "+Y") {
        alert("Please fill in the positive y value.");
        return false;
    }
    y['positive'] = value;
    value = element.childNodes[1].childNodes[3].innerText;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "-Y") {
        alert("Please fill in the negative y value.");
        return false;
    }
    y['negative'] = value;

    var box = {};
    var count = 0;
    value = element.childNodes[1].childNodes[1].childNodes[0].innerText;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "-X & +Y") {
        box["-x+y"] = "N/A";
    } else {
        box["-x+y"] = value;
        count++;
    }
    value = element.childNodes[1].childNodes[1].childNodes[1].innerText;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "+X & +Y") {
        box["+x+y"] = "N/A";
    } else {
        box["+x+y"] = value;
        count++;
    }
    value = element.childNodes[1].childNodes[2].childNodes[0].innerText;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "-X & -Y") {
        box["-x-y"] = "N/A";
    } else {
        box["-x-y"] = value;
        count++;
    }
    value = element.childNodes[1].childNodes[2].childNodes[1].innerText;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "+X & -Y") {
        box["+x-y"] = "N/A";
    } else {
        box["+x-y"] = value;
        count++;
    }

    if (count < 2) {
        alert("Please fill in at least two position in the matrix.");
        return false;
    }

    var result = {};
    result['type'] = "matrix";
    result["x"] = x;
    result["y"] = y;
    result["content"] = box;
    return result;
}

function packNoteProcess(element) {
    var prs = element.childNodes[1].childNodes;
    var result = {};
    var content = [];
    for (var i = 0; i < prs.length; i++) {
        if (prs[i].classList.contains("note-process-single-process")) {
            var value = prs[i].innerHTML;
            value = value.trimLeft().trimRight();
            if (value.length === 0 || value === "操作步骤 Step") {
                alert("Please fill in steps.");
                return false;
            }
            content.push(value);
        }
    }
    if (content.length < 1) {
        alert("Please fill in steps.");
        return false;
    }
    result['type'] = "process";
    result['content'] = content;
    return result;
}

function packNoteComment(element) {
    var value = element.innerHTML;
    value = value.trimRight().trimLeft();
    if (value.length === 0 || value === "请在此添加新的评论 Comment Here") {
        return false;
    }
    return value;
}