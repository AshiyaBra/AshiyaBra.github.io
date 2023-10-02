const runMan = () =>{
    let Running = false;
    const man = document.querySelector("#run-man"); 

    const toggleMove = () => {
        Running = !Running;
        man.src = Running ? "images/running-man.png" : "images/walking-man.png";
    };

    setInterval(toggleMove, 2000);
};

const Thermometer = () =>{
    const amount = parseInt(document.getElementById("txt-amount").value);
    document.getElementById("thermometer-move").classList.add("color");
    const root = document.querySelector(":root");

    if (amount > 0 && amount <= 4999) {
        root.style.setProperty("--num", "75%");
    } else if (amount > 4999 && amount <= 7499) {
        root.style.setProperty("--num", "50%");
    } else if (amount > 7499 && amount <= 9999) {
        root.style.setProperty("--num", "25%");
    } else if (amount === 10000 && amount > 0) {
        root.style.setProperty("--num", "100%");
    }
}
window.onload = () =>{
    document.getElementById("button-thermometer").onclick = Thermometer;
    runMan();
}
