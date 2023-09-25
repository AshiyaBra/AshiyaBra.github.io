const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};


const displayAmount = () => {
    
    const amount = parseInt(document.getElementById("txt-amount").value);
    document.getElementById("rectangle").classList.add("color");
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
};




const displayOrder = () =>{
    const resultDiv = document.getElementById("result");
    const name1 = document.getElementById("txt-name-one").value;
    const age1 = parseInt(document.getElementById("txt-age-one").value);
    const name2 = document.getElementById("txt-name-two").value;
    const age2 = parseInt(document.getElementById("txt-age-two").value);
    const name3 = document.getElementById("txt-name-three").value;
    const age3 = parseInt(document.getElementById("txt-age-three").value);
    const error = document.getElementById("error");
    error.classList.add("hiden");
    resultDiv.classList.add("hiden");
    
    let result = " ";

    if( age1 > age2 && age1 > age3){
        result =  name1 + " is the oldest. ";
        if( age2 > age3){
            result += name3 + " is the youngest. ";
        }else{
            result += name2 + " is the youngest. ";
        }
    }else if (age2 > age1 && age2 > age3){
        result = name2 + " is the oldest. ";
        if( age3 > age1){
            result += name1 + " is the youngest. ";
        }else{
            result += name3 + " is the youngest. ";
        }
    }else if(age3 > age1 && age3 > age2){ 
        result =  name3 + " is the oldest. ";
        if( age2 > age1){
            result += name1 + " is the youngest. ";
        }else{
            result += name2 + " is the youngest. ";
        }
    }

    resultDiv.textContent = result;

    if(isNaN(age1 < 0 || age2 < 0 || age3 < 0))
    {
        error.classList.remove("hidden");
        error.innerHTML = "Oldest to Youngest: Invalid information.";
        
    }

};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-compare").onclick = displayOrder;
    document.getElementById("button-themometer").onclick = displayAmount;
};
