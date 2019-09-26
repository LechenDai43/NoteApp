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
    var string = ["列表", "表格", "矩阵", "图片", "树状图", "文氏图"];
    for (var i = 0; i < 6; i++) {
        var tool = document.createElement("div");
        tool.classList.add("tool");
        tool.innerHTML = string[i];
        tool.onclick = addSpecialComponent(event, i);
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

}