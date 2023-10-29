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
    const tabletsContainer = document.getElementById("tablets"); 

    info.tablets.forEach((tablet) => {
        infoContainer.appendChild(getProductInfo(tablet));
    });

    const phonesContainer = document.getElementById("phones"); 
    info.phones.forEach((phone) => {
        infoContainer.appendChild(getProductInfo(phone));
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
    name.innerHTML = `<strong>Name: ${tablet.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: $${tablet.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${tablet.description}`;

    const img = document.createElement("img");
    img.src = tablet.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getPhoneInfo = (phone) => {
   
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: ${phone.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: $${phone.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${phone.description}`;

    const img = document.createElement("img");
    img.src = phone.image;

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
    previewBox();
    displayInfo();
};
