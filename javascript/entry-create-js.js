var gimg;

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

    var remove = document.createElement("button");
    remove.innerText = "移除 Remove";
    remove.classList.add("remove-btn");
    remove.setAttribute("onclick", "removeElement(event)");
    list.append(remove);

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

    var remove = document.createElement("button");
    remove.innerText = "移除 Remove";
    remove.classList.add("remove-btn");
    remove.setAttribute("onclick", "removeElement(event)");
    table.append(remove);

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

    var remove = document.createElement("button");
    remove.innerText = "移除 Remove";
    remove.classList.add("remove-btn");
    remove.setAttribute("onclick", "removeElement(event)");
    outer.append(remove);

    group.append(outer);
    addEntryContent(group);
}

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

/*
    Below is the code for the followings:
    1. checking validation of inputs;
    2. making inputs into json;
    3. send inputs-json to backend.
 */

function createEntry() {
    var js = checkCommon();
    if (!js) {
        return;
    }


    js['type'] = "entry";

    var introduction = document.getElementsByClassName("introduction-p")[0].innerHTML;
    introduction = introduction.trimLeft().trimRight();
    if (introduction.length === 0 || introduction === "填写简介 Fill Introduction Here") {
        alert("Please fill in the introduction.");
        return;
    }
    js['introduction'] = introduction;

    var subsecs = document.getElementsByClassName("a-group");
    var subsections = [];
    for (var i = 0; i < subsecs.length; i++) {
        var subsec = packSubSection(subsecs[i]);
        if (!subsec) {
            return;
        }
        subsections.push(subsec);
    }
    if (subsections.length === 0) {
        alert("Please fill in at least one subsection.");
        return;
    }
    js['content'] = subsections;

    var refs = document.getElementsByClassName("entry-ref-list")[0].childNodes;
    var refrences = [];
    var count = 0;
    for (var i = 0; i < refs.length; i++) {
        if (refs[i].tagName === "LI") {
            var value = refs[i].innerHTML;
            value = value.trimRight().trimLeft();
            if (value.length === 0 || value === "来源 Recourse") {
                continue;
            }
            count++;
            refrences.push(value);
        }
    }
    if (count === 0) {
        alert("Please have at least one reference.");
        return;
    }
    js["reference"] = refrences;

}

function packSubSection(element) {
    var title = element.childNodes[0].innerText;
    title = title.trimLeft().trimRight();
    if (title.length === 0 || title === "小标题 Unit Title") {
        alert("Please fill in unit title.");
        return false;
    }
    var result = [];
    result['title'] = title;

    var content = [];
    var contents = element.childNodes[3].childNodes;
    for (var i = 0; i < contents.length; i++) {
        var components = contents[i];
        var component;
        if (components.classList.contains("in-section-p")) {
            component = packEntryParagraph(components);
            if (!component) {
                return false;
            }
        } else if (components.classList.contains("entry-table")) {
            component = packEntryTable(components);
            if (!component) {
                return false;
            }
        } else if (components.classList.contains("entry-list")) {
            component = packEntryList(components);
            if (!component) {
                return false;
            }
        } else if (components.classList.contains("entry-outer-image")) {
            component = packEntryImage(components);
            if (!component) {
                return false;
            }
        } else if (component.tagName === "TEXT") {
            continue;
        } else {
            alert("Unidentified element.");
            return false;
        }
        content.push(component);
    }
    if (content.length === 0) {
        alert("Please at least have one content.");
        return false;
    }

    result['content'] = content;
    return result;
}

function packEntryParagraph(element) {
    var content = element.innerHTML;
    content = content.trimLeft().trimRight();
    if (content.length === 0 || content === "章节内容 Chapter Content") {
        alert("Please fill in content.");
        return false;
    }
    var result = [];
    result['type'] = 'paragraph';
    result['content'] = content;
    return result;
}

function packEntryTable(element) {
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
        var row = [];
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
    var result = [];
    result['type'] = "table";
    result['head'] = head;
    result['table'] = table;
    return result;
}

function packEntryList(element) {
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
        alert("Please add at least on item in the list.")
        return false;
    }
    var result = [];
    result['type'] = 'list';
    result['content'] = item;
    return result;
}

function packEntryImage(element) {
    var result = [];
    result['type'] = "image";

    var image = element.childNodes[1].getAttribute("src");
    if (element.childNodes[1].getAttribute("style") === "display:none;" || image.length === 0) {
        alert("Please upload an image.");
        return false;
    }
    result["image"] = image;
    return result;
}