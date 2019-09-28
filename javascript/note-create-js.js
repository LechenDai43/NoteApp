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
        case 4:
            addTree();
            break;
    }
    var newContent = document.createElement("p");
    newContent.classList.add("note-content-p");
    newContent.setAttribute("contenteditable", "true");
    newContent.innerHTML = "请在此添加内容 Please Fill Content Here";
    var parent = document.getElementsByClassName("note-container")[0];
    parent.append(newContent);
}

function addMatrix() {
    
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
var test = 0;
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