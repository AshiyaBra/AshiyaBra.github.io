const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/part4/json/index.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();
    const infoContainer = document.getElementById("main-content"); 
    info.forEach((info) => {
        infoContainer.appendChild(getSectionInfo(info));
    });
};

const getSectionInfo = (info) => {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.innerHTML = info.name;


    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${info.description}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/part4/${info.image}`; 

    section.appendChild(h2);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
