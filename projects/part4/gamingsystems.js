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
    const infoContainer = document.getElementById("categories"); 

    // Access data by category name
    info["categories"].forEach((category) => {
        infoContainer.appendChild(getCategoryInfo(category));
    });

    const trendingProductsContainer = document.getElementById("trending-products");
    info["trending-products"].forEach((trendingProduct) => {
        trendingProductsContainer.appendChild(getTrendingProductInfo(trendingProduct));
    });

    const salesContainer = document.getElementById("sales");
    info["sales"].forEach((sale) => {
        salesContainer.appendChild(getSaleInfo(sale));
    });
};

const getCategoryInfo = (category) => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.innerHTML = `<strong>Name: </strong> ${category.title}`;

    const img = document.createElement("img");
    img.src = category.images[2];

    section.appendChild(title);
    section.appendChild(img);

    return section;
};

const getTrendingProductInfo = (trendingProduct) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${trendingProduct.name}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${trendingProduct.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${trendingProduct.facts}`;

    const img = document.createElement("img");
    img.src = trendingProduct.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getSaleInfo = (sale) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${sale.name}`;
    
    const oldPrice = document.createElement("p");
    oldPrice.innerHTML = `<strong>New Price: </strong> $${sale.oldPrice}`;

    const newPrice = document.createElement("p");
    newPrice.innerHTML = `<strong>Old Price: </strong> $${sale.newPrice}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${sale.facts}`;

    const img = document.createElement("img");
    img.src = sale.image;

    section.appendChild(name);
    section.appendChild(oldPrice);
    section.appendChild(newPrice);
    section.appendChild(description);
    section.appendChild(img);
    
    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};