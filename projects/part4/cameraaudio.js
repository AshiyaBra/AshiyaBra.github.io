const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/part4/json/cameraaudio.json";
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

    info.products.forEach((product) => {
        infoContainer.appendChild(getProductInfo(product));
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

const getProductInfo = (product) => {
   
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: ${product.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: $${product.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${product.description}`;

    const img = document.createElement("img");
    img.src = product.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};


const getTrendingProductInfo = (trendingProduct) => {

    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: ${trendingProduct.name}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: $${trendingProduct.price}`;

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
    name.innerHTML = `<strong>Name: ${sale.name}`;
    
    const oldPrice = document.createElement("p");
    oldPrice.innerHTML = `<strong>New Price: $${sale.oldPrice}`;

    const newPrice = document.createElement("p");
    newPrice.innerHTML = `<strong>Old Price: $${sale.newPrice}`;

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
