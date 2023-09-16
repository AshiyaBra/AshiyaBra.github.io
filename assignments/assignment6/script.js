const showCare = () => {
    document.getElementById("care").classList.remove("hide");
}

const hideCare = () => {
    document.getElementById("care").classList.add("hide");
}

const moveCircle = () => {

    document.getElementById("circle").classList.add("move-circle");
}

const addComment = () => {

    const carebearName = document.getElementById("txt-care-bear-name").value;
    const comment = document.getElementById("txt-comment").value;
    const age = document.getElementById("txt-age").value;
    const creatorName = document.getElementById("txt-creator-name").value;

    const commentMessage = carebearName + '\n'  + comment + '\n' + age + '\n' + creatorName;
    const commentContainer = document.getElementById("comment-container");
    const commentParagraph = document.createElement("p");

    commentParagraph.textContent = commentMessage;
    commentContainer.appendChild(commentParagraph);

    document.getElementById("txt-care-bear-comment").value = " ";
    document.getElementById("txt-comment").value = " ";
    document.getElementById("txt-age").value = " ";
    document.getElementById("txt-creator-name").value = " ";
}

window.onload = () => {
    document.getElementById("show-pic").onclick = showCare;
    document.getElementById("hide-pic").onclick = hideCare;
    document.getElementById("button-move").onclick = moveCircle;
    document.getElementById("button-comment").onclick = addComment;
}

