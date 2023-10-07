let count = 1; 
const quotes = () => {
    const currentQuote = document.querySelector(
        `#quotes :nth-child(${count})`
        );
    count++;

    let nextQuote = currentQuote.nextElementSibling;
    if(nextQuote == null){
        nextQuote = document.querySelector("#quotes :first-child");
        count = 1;        
    }
    
    currentQuote.classList.add("quoteHide");
    nextQuote.classList.add("quoteShow");
    
    currentQuote.addEventListener("animationend", () => {
        currentQuote.classList.add("hidden");
        currentQuote.classList.remove("quoteHide");
    });

    nextQuote.addEventListener("animationend", () => {
        nextQuote.classList.remove("hidden");
        nextQuote.classList.remove("quoteShow");
    });
    
};

const drawRainbow = () => {
    const Colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];

    const rainBow = document.getElementById("rainbow");
    rainBow.innerHTML = '';

    Colors.forEach((color, index) => {
        /*tried to use setInterval but it was wancy so had to use chatgpt for setTimeout*/
        setTimeout(() => {
            const Strips = document.createElement('p');
            Strips.style.backgroundColor = color;
            Strips.classList.add('strips');
            rainBow.appendChild(Strips);

            if (index == Colors.length - 1) {
                    const potofGold = document.createElement('img');
                    potofGold.src = 'images/potofgold.png';
                    potofGold.classList.add('pot-of-gold');
                    rainBow.appendChild(potofGold);
                }
        }, index * 1000); 
    });

};

window.onload = () => {
    setInterval(quotes, 2000);
    document.getElementById("button-rainbow").onclick = drawRainbow;
};
