const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/part4/json/sales.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();
    const infoContainer = document.getElementById("cat-content"); 

    const categoryContainer = document.getElementById(category);
    info.sales[category].forEach((product) => {
        categoryContainer.appendChild(getProductInfo(product));
    });

    const trendingProductsContainer = document.getElementById("trending-products");
    info.trendingProducts.forEach((trendingProduct) => {
        trendingProductsContainer.appendChild(getTrendingProductInfo(trendingProduct));
    });

    
    const salesContainer = document.getElementById("sales");
    info.sales.forEach((sale) => {
        salesContainer.appendChild(getSaleInfo(sale));
    });
};

const getTabletsInfo = (product) => {
    const section = document.createElement("section");

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${product.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${product.description}`;

    const img = document.createElement("img");
    img.src = product.image;

   
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getPhonesInfo = (product) => {
    const section = document.createElement("section");

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${product.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${product.description}`;

    const img = document.createElement("img");
    img.src = product.image;

   
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getCameraInfo = (product) => {
    const section = document.createElement("section");

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${product.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${product.description}`;

    const img = document.createElement("img");
    img.src = product.image;

   
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getAudioInfo = (product) => {
    const section = document.createElement("section");

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${product.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${product.description}`;

    const img = document.createElement("img");
    img.src = product.image;

   
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getGamingSystemsInfo = (sale) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${sale.name}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${sale.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${sale.description}`;

    const img = document.createElement("img");
    img.src = sale.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);
    
    return section;
};

const getComputersInfo = (sale) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${sale.name}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${sale.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${sale.description}`;

    const img = document.createElement("img");
    img.src = sale.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);
    
    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
