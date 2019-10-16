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
            arrow.setAttribute("height", "40");
            arrow.classList.add("note-process-arrow");
            main.append(arrow);
        }
    }
    process.append(main);

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
                arrow.setAttribute("height", "40");
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
    btn.onclick = function() {addListItem(event)};
    btn.innerHTML = "+";
    list.append(btn);

    var parent = document.getElementsByClassName("note-container")[0];
    parent.append(list);
}

function addListItem(event) {
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
        btnCol.onclick = function() {addColumn(event)};
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
        row.classList.add("note-table-head");
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
    btnRow.onclick = function() {addRow(event)};
    btnRow.innerHTML = "+";
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.append(btnRow);
    tr.append(td);
    tbody.append(tr);
    table.append(tbody);

    var parent = document.getElementsByClassName("note-container")[0];
    parent.append(table);
}

function addColumn(event) {
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

function addRow(event) {
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