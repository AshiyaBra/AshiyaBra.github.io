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

const getProductDataByImageSrc = (previewImageSrc) => {
    return response.find((product) => product.previewImage === previewImageSrc);
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
    const infoContainer = document.getElementById("cat-content"); 

    
    info.products.forEach((tablets) => {
        infoContainer.appendChild(getProductInfo(tablets));
    });

    const cameraContainer = document.getElementById("phones"); 
    info.products.forEach((phones) => {
        cameraContainer.appendChild(getPhoneInfo(phones));
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

const getProductInfo = (phones) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${phones.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${phones.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${phones.description}`;

    const img = document.createElement("img");
    img.src = phones.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getPhoneInfo = (tablets) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${tablets.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${tablets.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${tablets.description}`;

    const img = document.createElement("img");
    img.src = tablets.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
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
    previewBox();
    displayInfo();
};
