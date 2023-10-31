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

    const tabletContainer = document.getElementById("tablets");
    info.tablets.forEach((tablet) => {
        tabletContainer.appendChild(getTabletsInfo(tablet));
    });

    const phoneContainer = document.getElementById("phones");
    info.phones.forEach((phone) => {
        phoneContainer.appendChild(getPhonesInfo(phone));
    });

    const cameraContainer = document.getElementById("camera");
    info.cameras.forEach((camera) => {
        cameraContainer.appendChild(getCameraInfo(camera));
    });

    const audioContainer = document.getElementById("audio");
    info.audios.forEach((audio) => {
        audioContainer.appendChild(getAudioInfo(audio));
    });

    const gamingSystemsContainer = document.getElementById("gamingsystems");
    info.gamingSystems.forEach((gamingSystem) => {
        gamingSystemsContainer.appendChild(getGamingSystemsInfo(gamingSystem));
    });

    
    const computersContainer = document.getElementById("computers");
    info.computers.forEach((computer) => {
        computersContainer.appendChild(getSaleInfo(computer));
    });
};

const getTabletsInfo = (tablet) => {
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

const getPhonesInfo = (phone) => {
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

const getCameraInfo = (camera) => {
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

const getAudioInfo = (audio) => {
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

const getGamingSystemsInfo = (gamingSystem) => {
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

const getComputersInfo = (computer) => {
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
