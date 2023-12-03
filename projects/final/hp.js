const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/part4/json/hp.json";
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

    for (const decade in info["products"]) {
        const productsInDecade = info["products"][decade];
        const decadeTitle = document.createElement("h2");
        decadeTitle.textContent = decade;
        infoContainer.appendChild(decadeTitle);

        productsInDecade.forEach((product) => {
            infoContainer.appendChild(getProductInfo(product));
        });
    }
};

const getProductInfo = (product) => {
    const section = document.createElement("section");

    const title = document.createElement("h3"); 
    title.textContent = product.title;

    const facts = document.createElement("p");
    facts.innerHTML = `<strong>Facts: </strong> ${product.facts}`;

    const img = document.createElement("img");
    img.src = product.image;

    section.appendChild(title);
    section.appendChild(facts);
    section.appendChild(img);

    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
