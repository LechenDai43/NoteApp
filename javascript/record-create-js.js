function addRecordImplement(event) {
    var btn = event.target;
    var proc = btn.parentElement;
    var table = proc.childNodes[1];
    if (table.classList.contains("a-plan")) {
        table = proc.childNodes[3];
    }

    var tr = document.createElement("tr");

    var left = document.createElement("td");
    var lp = document.createElement("p");
    lp.setAttribute("contenteditable", "true");
    lp.classList.add("an-implement");
    lp.classList.add(proc.id.concat("-", "imp"));
    lp.innerHTML = "实施情况 Implement Detail";
    left.append(lp);

    var right = document.createElement("td");
    var rp = document.createElement("p");
    rp.setAttribute("contenteditable", "true");
    rp.classList.add("a-review");
    rp.classList.add(proc.id.concat("-", "rev"));
    rp.innerHTML = "反思 Review";
    right.append(rp);

    tr.append(left);
    tr.append(right);
    table.append(tr);
}

function addRecordPlan() {
    var proc = document.createElement("div");
    proc.classList.add("a-process");
    proc.id = "proc".concat("-", document.getElementsByClassName("a-process").length.toString(10));

    var top = document.createElement("div");
    top.classList.add("a-plan");
    var head = document.createElement("h3");
    head.innerHTML = "计划-Plan";
    top.append(head);
    var content = document.createElement("p");
    content.classList.add("plan-content");
    content.setAttribute("contenteditable", "true");
    content.innerHTML = "计划内容 Plan Details";
    top.append(content);
    proc.append(top);

    var mid = document.createElement("table");
    var tr = document.createElement("tr");
    var left = document.createElement("td");
    var lp = document.createElement("p");
    lp.setAttribute("contenteditable", "true");
    lp.classList.add("an-implement");
    lp.classList.add(proc.id.concat("-", "imp"));
    lp.innerHTML = "实施情况 Implement Detail";
    left.append(lp);
    var right = document.createElement("td");
    var rp = document.createElement("p");
    rp.setAttribute("contenteditable", "true");
    rp.classList.add("a-review");
    rp.classList.add(proc.id.concat("-", "rev"));
    rp.innerHTML = "反思 Review";
    right.append(rp);
    tr.append(left);
    tr.append(right);
    mid.append(tr);
    proc.append(mid);

    var btn = document.createElement("button");
    btn.classList.add("add-button");
    btn.id = "implement-add".concat("-", proc.id);
    btn.innerHTML = "添加 Add";
    btn.onclick = function() {addRecordImplement(event)};
    proc.append(btn);

    var parent = document.getElementsByClassName("processes-container")[0];
    var youngBro = document.getElementById("plan-add");
    parent.insertBefore(proc, youngBro);
}