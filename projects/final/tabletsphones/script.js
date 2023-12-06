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
    const url = "https://ashiyabra.github.io/projects/final/json/tabletsphones.json";
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

    
    info.tablets.forEach((tablet) => {
        infoContainer.appendChild(getTabletInfo(tablet));
    });

    const phoneContainer = document.getElementById("phones"); 
    info.phones.forEach((phone) => {
        phoneContainer.appendChild(getPhoneInfo(phone));
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

const getTabletInfo = (tablet) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${tablet.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${tablet.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${tablet.description}`;

    const img = document.createElement("img");
    img.src = tablet.image;
    
    img.setAttribute("data-large-src", tablet.previewImage);
    img.setAttribute("data-preview-description", tablet.previewDescription);

    img.classList.add("preview-trigger");

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getPhoneInfo = (phone) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${phone.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${phone.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${phone.description}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${phone.image}`;

    const link = document.createElement("a");
    link.href = phone.link;

    link.appendChild(img);
    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(link);

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
    img.src = `https://ashiyabra.github.io/projects/final/${trendingProduct.image}`;

    const link = document.createElement("a");
    link.href = trendingProduct.link;
    
    link.appendChild(img);
    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(link);

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
    img.src = `https://ashiyabra.github.io/projects/final/${sale.image}`;

    const link = document.createElement("a");
    link.href = sale.link;
    


    link.appendChild(img);
    section.appendChild(name);
    section.appendChild(oldPrice);
    section.appendChild(newPrice);
    section.appendChild(description);
    section.appendChild(link);
    
    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    previewBox();
    displayInfo();
};
