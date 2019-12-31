function removeElement(event) {
    var main = event.target.parentElement;
    var sebling = main.parentElement.childNodes;
    var next, before;
    var n_txt, b_txt;
    for (var i = 1; i < sebling.length - 1; i++) {
        if (sebling[i] === main) {
            next = sebling[i + 1];
            if (i === 3) {
                before = sebling[1];
            } else {
                before = sebling[i - 1];
            }
            n_txt = next.innerText;
            b_txt = before.innerText;
            break;
        }
    }
    if (n_txt.length === 0 || n_txt === "请在此添加内容 Please Fill Content Here" || n_txt === "章节内容 Chapter Content") {
        before.innerText = b_txt;
    } else {
        before.innerText = b_txt + n_txt;
    }
    var parent = main.parentElement;
    parent.removeChild(main);
    parent.removeChild(next);

}

function checkCommon() {
    var title = document.getElementsByClassName("title-field")[0].innerHTML;
    title = title.trimRight().trimLeft();
    if (title.length < 1 || title === "在这里填写标题 Fill Title Here") {
        alert("Please fill in the title.")
        return false;
    }
    var tags = document.getElementsByClassName("tag-field")[0].innerHTML;
    var valid_tag = tagToJson(tags);
    if (!valid_tag) {
        alert("Please fill in at least one tag.")
        return false;
    }
    var js = {};
    js["title"] = title;
    js['tag'] = valid_tag;
    return js;
}

function tagToJson(tags) {
    tags = tags.replace("&nbsp;", " ");
    tags = tags.trimLeft();
    tags = tags.trimRight();
    var arr = [];
    var i = tags.search(";");
    //console.log("标签的loop前");
    while (i > -1) {
        var tem = tags.substring(0, i);
        tem = tem.trimLeft();
        tem = tem.trimRight();
        if (tem.length > 0) {
            arr.push(tem);
        }
        tags = tags.substring(i + 1);
        i = tags.search(";");
    }
    //console.log("标签的loop后");
    if (tags.length > 0) {
        arr.push(tags);
    }
    if (arr.length === 0) {
        return false;
    }
    return arr;
}