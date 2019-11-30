function addEntrySection() {
    var outer = document.createElement("div");
    outer.classList.add("a-group");

    var header = document.createElement("h3");
    header.setAttribute("contenteditable", "true");
    header.innerHTML = "小标题 Unit Title";
    outer.append(header);

    var hr = document.createElement("hr");
    outer.append(hr);

    var bar = document.createElement("div");
    bar.classList.add("entry-tool-bar");
    var string = ["列表", "表格", "图片"];
    for (var i = 0; i < 3; i++) {
        var tool = document.createElement("div");
        tool.classList.add("tool");
        tool.innerHTML = string[i];
        tool.setAttribute("onclick", "addSpecialComponent(event," + i + ")");
        bar.append(tool);
    }
    outer.append(bar);

    var inner = document.createElement("div");
    inner.classList.add("section-container");
    var content = document.createElement("p");
    content.classList.add("in-section-p");
    content.setAttribute("contenteditable", "true");
    content.innerHTML = "章节内容 Chapter Content";
    inner.append(content);
    outer.append(inner);

    var parent = document.getElementsByClassName("all-sections")[0];
    var youngBro = document.getElementById("entry-section-add");
    parent.insertBefore(outer, youngBro);
}

function addEntryReference() {
    var newItem = document.createElement("li");
    newItem.innerHTML = "来源 Recourse";
    var parent = document.getElementsByClassName("entry-ref-list")[0];
    parent.append(newItem);
}

function addSpecialComponent(event, key) {
    var group = event.target.parentElement.parentElement.childNodes[7];
    switch (key) {
        case 0:
            addSpecialList(group);
            break;
        case 1:
            addSpecialTable(group);
            break;
        case 2:
            addSpecialImage(group);
            break;
    }
}

function addEntryContent(group) {
    var con = document.createElement("p");
    con.classList.add("in-section-p");
    con.setAttribute("contenteditable", "true");
    con.innerHTML = "章节内容 Chapter Content";
    group.append(con);
}

function addSpecialList(group) {
    var list = document.createElement("ul");
    list.classList.add("entry-list");

    var li = document.createElement("li");
    li.classList.add("entry-list-item");
    li.setAttribute("contenteditable", "true");
    li.innerHTML = "内容 Content";

    list.append(li);

    var btn = document.createElement("button");
    btn.classList.add("add-button");
    btn.classList.add("list-item-add");
    btn.onclick = function() {addEntryListItem(event)};
    btn.innerHTML = "+";
    list.append(btn);

    group.append(list);
    addEntryContent(group);
}

function addSpecialTable(group) {
    var table = document.createElement("table");
    table.classList.add("entry-table");

    var thead = document.createElement("thead");
    var trh = document.createElement("tr");
    trh.classList.add("entry-table-head");
    var left = document.createElement("th");
    var lp = document.createElement("p");
    lp.classList.add("entry-table-header");
    lp.setAttribute("contenteditable", "true");
    lp.innerHTML = "字节 Head";
    left.append(lp);

    var right = document.createElement("th");
    var rp = document.createElement("p");
    rp.classList.add("entry-table-header")
    rp.setAttribute("contenteditable", "true");
    rp.innerHTML = "字节 Head";
    right.append(rp);

    var addCol = document.createElement("th");
    var btnCol = document.createElement("button");
    btnCol.classList.add("add-button");
    btnCol.classList.add("entry-column-add");
    btnCol.onclick = function() {addEntryColumn(event)};
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
        row.classList.add("entry-table-body");
        for (var j = 0; j < 2; j++) {
            var cell = document.createElement("td");
            var p = document.createElement("p");
            p.classList.add("entry-table-cells");
            p.setAttribute("contenteditable", "true");
            p.innerHTML = "内容 Content";
            cell.append(p);
            row.append(cell);
        }
        tbody.append(row);
    }
    var btnRow = document.createElement("button");
    btnRow.classList.add("add-button");
    btnRow.classList.add("entry-row-add");
    btnRow.onclick = function() {addEntryRow(event)};
    btnRow.innerHTML = "+";
    var tr = document.createElement("tr");
    tr.classList.add("table-entry-btn-row");
    var td = document.createElement("td");
    td.append(btnRow);
    tr.append(td);
    tbody.append(tr);
    table.append(tbody);

    group.append(table);
    addEntryContent(group);
}

function addEntryColumn(event) {
    var table = event.target.parentElement.parentElement.parentElement.parentElement;
    var youngBro = event.target.parentElement;
    var thead = table.childNodes[0];
    var tbody = table.childNodes[1];

    var th = document.createElement("th");
    var ph = document.createElement("p");
    ph.classList.add("entry-table-header");
    ph.setAttribute("contenteditable", "true");
    ph.innerHTML = "字节 Head";
    th.append(ph);
    thead.childNodes[0].insertBefore(th, youngBro);

    for (var i = 0; i < tbody.childNodes.length - 1; i++) {
        var row = tbody.childNodes[i];
        var cell = document.createElement("td");
        var p = document.createElement("p");
        p.classList.add("entry-table-cells");
        p.setAttribute("contenteditable", "true");
        p.innerHTML = "内容 Content";
        cell.append(p);
        row.append(cell);
    }
}

function addEntryRow(event) {
    var youngBro = event.target.parentElement.parentElement;
    var tbody = youngBro.parentElement;

    var length = tbody.childNodes[0].childNodes.length;
    var row = document.createElement("tr");
    row.classList.add("entry-table-head");
    for (var j = 0; j < length; j++) {
        var cell = document.createElement("td");
        var p = document.createElement("p");
        p.classList.add("entry-table-cells");
        p.setAttribute("contenteditable", "true");
        p.innerHTML = "内容 Content";
        cell.append(p);
        row.append(cell);
    }

    tbody.insertBefore(row, youngBro);
}


function addSpecialImage(group) {
    var outer = document.createElement("div");
    outer.classList.add("entry-outer-image");

    var input = document.createElement("input");
    input.setAttribute("type","file");
    input.setAttribute("oninput", "inputImage(event)");
    input.setAttribute("accept", "image/png, .jpeg, .jpg");

    outer.append(input);

    var img = document.createElement("img");
    img.setAttribute("style", "display:none;");
    img.setAttribute("ondblclick", "changeImage(event)");

    outer.append(img);

    group.append(outer);
    addEntryContent(group);
}

var gimg;

function inputImage(event) {
    var value = event.target.value;
    if (value.search(/(png|jpeg|jpg)/i) > 1) {
        var img = event.target.parentElement.childNodes[1];
        gimg = img;
        var fReader = new FileReader();
        fReader.readAsDataURL(event.target.files[0]);
        fReader.onloadend = function (event) {
            gimg.src = event.target.result;
            gimg.setAttribute("style", "display:show;");
            gimg.setAttribute("width", "500px");
        };
        event.target.setAttribute("style", "display:none;");
    }
}

function changeImage(event) {
    event.target.parentElement.childNodes[0].setAttribute("style", "display:show;");
}

function addEntryListItem(event) {
    var list = event.target.parentElement;
    var youngBro = event.target;
    var li = document.createElement("li");
    li.classList.add("entry-list-item");
    li.setAttribute("contenteditable", "true");
    li.innerHTML = "内容 Content";

    list.insertBefore(li, youngBro);
}

function createEntry() {
    var js = checkCommon();
    if (!js) {
        return;
    }
}