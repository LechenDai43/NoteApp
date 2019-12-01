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
    mid.classList.add("try-detail");
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

/*
    Below is the code for the followings:
    1. checking validation of inputs;
    2. making inputs into json;
    3. send inputs-json to backend.
 */

function createRecord() {
    var js = checkCommon();
    if (!js) {
        return;
    }
    js['type'] = "record";

    var descp = document.getElementsByClassName("description-container")[0].childNodes;
    var desc = false;
    for (var i = 0; i < descp.length; i++) {
        if (descp[i].nodeName === "P") {
            desc = descp[i];
        }
    }
    if (!desc) {
        return;
    }
    var describe = desc.innerHTML;
    describe = describe.trimRight().trimLeft();
    if (describe.length === 0 || describe === "详细内容 Details") {
        alert("Please fill in task detail.");
        return;
    }
    js['task'] = describe;

    var plans = document.getElementsByClassName("a-plan");
    var tries = document.getElementsByClassName("try-detail");
    if (plans.length !== tries.length) {
        return;
    }
    var content = [];
    for (var i = 0; i < plans.length; i++) {
        var one = [];
        var plan = packRecordPlan(plans[i]);
        if (!plan) {
            return;
        }
        one['plan'] = plan;
        var impl = packRecordTries(tries[i]);
        if (!impl) {
            return;
        }
        one['implementation'] = impl;
        content.push(one);
    }
    js['content'] = content;

    var sum = document.getElementsByClassName("record-summary")[0].innerHTML;
    sum = sum.trimLeft().trimRight();
    if (sum.length === 0 || sum === "总结 Summary") {
        alert("Please fill in summary.");
        return;
    }
    js['summary'] = sum;
}

function packRecordPlan(element) {
    var child = element.childNodes;
    var plan = "";
    for (var i = 0; i < child.length; i++) {
        if (child[i].nodeName === "P" && child[i].classList.contains("plan-content")) {
            plan = child[i].innerHTML;
            plan = plan.trimRight().trimLeft();
            break;
        }
    }
    if (plan.length === 0 || plan === "计划内容 Plan Details") {
        alert("Please fill in the plan.");
        return false;
    }
    return plan;
}

function packRecordTries(element) {
    var result = [];
    var child = element.childNodes;
    for (var i = 0; i < child.length; i++) {
        var row = 1;
        if (child[i].nodeName === "TBODY") {
            row = packRecordImplementation(child[i].childNodes[0]);
        } else if (child[i].nodeName === "TR") {
            row = packRecordImplementation(child[i]);
        }
        if (!row) {
            return false;
        } else if (row !== 1) {
            result.push(row);
        }
    }
    if (result.length === 0) {
        alert("Please have at least one try been recorded.");
        return false;
    }
    return result;
}

function packRecordImplementation(element) {
    var children = element.childNodes;
    var result = [];
    var key = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeName === "TD") {
            if (key === 0) {
                var value = children[i].innerHTML;
                value = value.trimLeft().trimRight();
                if (value.length === 0 || value === "实施情况 Implement Detail") {
                    alert("Please fill in your implementation.");
                    return false;
                }
                key = 1;
                result['implementation'] = value;
            } else {
                var value = children[i].innerHTML;
                value = value.trimLeft().trimRight();
                if (value.length === 0 || value === "反思 Review") {
                    alert("Please fill in your review on your implementation.");
                    return false;
                }
                result['review'] = value;
                break;
            }
        }
    }
    return result;
}