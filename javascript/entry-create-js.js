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
        tool.onclick = function() {addSpecialComponent(event, i)};
        bar.append(tool);
    }
    outer.append(bar);

    var inner = document.createElement("div");
    inner.classList.add("section-container")
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
    var group = event.target.parentElement.parentElement;
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
    console.log("get in the function");
    var con = document.createElement("p");
    con.classList.add("in-section-p");
    con.setAttribute("contenteditable", "true");
    con.innerHTML = "章节内容 Chapter Content";
    group.append(con);
}

function addSpecialList(group) {
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

    group.append(list);
    addEntryContent(group);
}