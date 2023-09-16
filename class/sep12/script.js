const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "Hi! To you Ashiya!";
    helloP.classList.add("special");
}

const showPlace = () => {
    document.getElementById("place").classList.remove("hide");
}

const hidePlace = () => {
    document.getElementById("place").classList.add("hide");
}


window.onload = () => {
    //gete button, tie function to clickage
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showPlace;
    document.getElementById("button-hide").onclick = hidePlace;
}