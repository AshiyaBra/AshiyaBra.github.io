
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
    const infoContainer = document.getElementById("cat-tabletsphones"); 
    info.forEach((info) => {
        infoContainer.appendChild(getSectionInfo(info));
    });
};

const getSectionInfo = (info) => {
    const section = document.createElement("section");

    const facts = document.createElement("p");
    facts.innerHTML = `<strong>Description: </strong> ${info.facts}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/part4/${info.image}`;


    section.appendChild(facts);
    section.appendChild(img);

    return section;
};

window.onload = () => {
    displayInfo();
    
};