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
        jsonData = await response.json();
        displayTablets();
        displayPhones();
        displayTrendingProducts();
        displaySales();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayTablets = () => {
    const tabletsData = jsonData.tablets; 
    const tabletsContainer = document.getElementById("cat-tablets"); 
    tabletsData.forEach((tablet) => {
        const tabletSection = getSectionInfo(tablet);
        tabletsContainer.appendChild(tabletSection);
    });
};


const displayPhones = () => {
    const phonesData = jsonData.phones; 
    const phonesContainer = document.getElementById("cat-phones"); 
    phonesData.forEach((phone) => {
        const phoneSection = getSectionInfo(phone);
        phonesContainer.appendChild(phoneSection);
    });
};

const displayTrendingProducts = () => {
    const productsData = jsonData.product; 
    const productsContainer = document.getElementById("cat-trendingProducts"); 
    productsData.forEach((product) => {
        const productSection = getSectionInfo(product);
        productsContainer.appendChild(productSection);
    });
};


const displaySales = () => {
    const salesData = jsonData.sale; 
    const salesContainer = document.getElementById("cat-sales"); 
    phonesData.forEach((sale) => {
        const saleSection = getSectionInfo(sale);
        salesContainer.appendChild(saleSection);
    });
};

const getSectionInfo = (info) => {
    const section = document.createElement("section");

    const newPrice = document.createElement("p");
    newPrice.innerHTML = `<strong>New Price: </strong> ${info.newPrice}`;

    const newOld = document.createElement("p");
    newOld.innerHTML = `<strong>New Old: </strong> ${info.newOld}`;

    const facts = document.createElement("p");
    facts.innerHTML = `<strong>Description: </strong> ${info.facts}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/part4/${info.image}`;

    section.appendChild(newPrice);
    section.appendChild(newOld);
    section.appendChild(facts);
    section.appendChild(img);

    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    previewBox();
    getInfo();
    
};