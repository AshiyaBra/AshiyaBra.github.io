const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const previewBox = () =>{
    const back = document.getElementById("preview-back");
    const content = document.querySelector(".content");

    document.querySelectorAll(".items img").forEach((img) => {
        img.onclick = () => {
            const largeSrc = img.getAttribute("data-large-src");
            document.querySelector(".content img").src = largeSrc;
            back.style.display = "block";
            content.classList.add("slideShow");

            content.addEventListener("animationend", () => {
                content.classList.remove("slideShow");
                content.style.opacity = 1;
            });
        };
    });

    document.querySelector(".close").onclick = () => {
        back.style.display = "none";
        content.style.opacity = 0;
    };

    window.onclick = (event) => {
        if (event.target == back) {
            back.style.display = "none";
            content.style.opacity = 0;
        }
    };
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/part4/json/tabletsphones.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();
    const infoContainer = document.getElementById("cat-tabletsphone"); 
    info.forEach((info) => {
        infoContainer.appendChild(getSectionInfo(info));
    });
};

const getSectionInfo = (info) => {
    const section = document.createElement("section");

    const newPrice = document.createElement("p");
    newPrice.innerHTML = `<strong>New Price: </strong> ${info.newPrice}`;

    const newOld = document.createElement("p");
    newOld.innerHTML = `<strong>New Old: </strong> ${info.newOld}`;

    const facts = document.createElement("p");
    facts.innerHTML = `<strong>Description: </strong> ${info.facts}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/part4/${info.image}`;

    section.appendChild(newPrice);
    section.appendChild(newOld);
    section.appendChild(facts);
    section.appendChild(img);

    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    previewBox();
    displayInfo();
    
};