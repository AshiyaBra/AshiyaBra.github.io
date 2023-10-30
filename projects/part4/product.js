const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/part4/json/product.json";
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

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${product.name}`;

    const authenticity = document.createElement("h2");
    authenticity.innerHTML = `<strong>Name: </strong> ${product.authenticity}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${product.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${product.facts}`;

    const img = document.createElement("img");
    img.src = product.images;

    section.appendChild(name);
    section.appendChild(authenticity);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};


window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
