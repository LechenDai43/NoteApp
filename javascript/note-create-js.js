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