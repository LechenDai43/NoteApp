function checkCommon() {
    var title = document.getElementsByClassName("title-field")[0].innerHTML;
    title = title.trimRight().trimLeft();
    if (title.length < 1) {
        alert("Please fill in the title.")
        return false;
    }
    var tags = document.getElementsByClassName("tag-field")[0].innerHTML;
    var valid_tag = tagToJson(tags);
    if (!valid_tag) {
        alert("Please fill in at least one tag.")
        return false;
    }
    var js = [];
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
    while (i > -1) {
        console.log("in loop");
        var tem = tags.substring(0, i);
        tem = tem.trimLeft();
        tem = tem.trimRight();
        if (tem.length > 0) {
            arr.push(tem);
        }
        tags = tags.substring(i + 1);
        i = tags.search(";");
    }
    if (tags.length > 0) {
        arr.push(tags);
    }
    if (arr.length === 0) {
        return false;
    }
    return arr;
}