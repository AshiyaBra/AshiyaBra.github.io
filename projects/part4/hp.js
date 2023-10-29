const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/part4/json/gamingsystems.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();
    const infoContainer = document.getElementById("products"); 

    
    info["products"].forEach((product) => {
        infoContainer.appendChild(getProductInfo(product));
    });
};

const getProductInfo = (product) => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.innerHTML = `<strong>Name: </strong> ${product.title}`;

    const img = document.createElement("img");
    img.src = product.images[2];

    section.appendChild(title);
    section.appendChild(img);

    return section;
};


window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
