const getFruits = async () => {
    try{
        return (await fetch("api/fruits/")).json();
    }catch(error){
        console.log(error);
    }
};

const showFruits = async () => {
    let fruits = await getFruits();
    let fruitsDiv = document.getElementById("fruits-list");
    fruits.forEach((fruit) => {
        const section = document.createElement("section");
        fruitsDiv.append(section);

        const a = document.createElement("a");
        a.href = "#"
        section.append(a);

        h3 = document.createElement("h3");
        h3.innerHTML = fruit.name;
        a.append(h3);

        a.onclick = (e) => {
            e.preventDefault();
            displayFruits(fruit);
        };
    });
};

const displayFruits = (fruit) => {
    const fruitsInfo = document.getElementById("fruits-info");
    fruitsInfo.innerHTML = " ";

    const color = document.createElement("p");
    color.innerHTML = `<strong>Color: </strong> ${fruit.color}`;
    fruitsInfo.append(color);

    const family = document.createElement("p");
    family.innerHTML = `<strong>Family: </strong> ${fruit.family}`;
    fruitsInfo.append(family);

    const place = document.createElement("p");
    place.innerHTML = `<strong>Place: </strong> ${fruit.place}`;
    fruitsInfo.append(place);

    const growth = document.createElement("p");
    growth.innerHTML = `<strong>Growth: </strong> ${fruit.growth}`;
    fruitsInfo.append(growth);

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${fruit.description}`;
    fruitsInfo.append(description);

    const image = document.createElement("img");
    image.src = fruit.image;
    fruitsInfo.append(image);

    const d = document.createElement("ul");
    fruitsInfo.append(d);
    fruit.fruits.forEach((fruit) => {
        const li = document.createElement("li");
        d.append(li);
        li.innerHTML = fruit;
    });

    const deleteLink = document.createElement("a");
    deleteLink.innerHTML = "&#x2715;";
    fruitsInfo.append(deleteLink);
    deleteLink.id = "delete";

    const editLink = document.createElement("a");
    editLink.innerHTML = "&#9998;";
    fruitsInfo.append(editLink);
    editLink.id = "edit";

    deleteLink.onclick = (e) => {
        e.preventDefault();
        
    };

    editLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("edit-fruit").innerHTML = "Edit Exotic Fruit Info";
    };

    populateEditForm(fruit);
};

const populateEditForm = (fruit) => {

};

const addExoticFruit = async(e) => {
    e.preventDefault();
    const form =  document.getElementById("edit-fruit");
    const formData = new FormData(form);
    let response;

    if(form._id.value == -1){
        formData.delete("_id");
        formData.delete("img");
        formData.append("fruits", getExoticFruits());

        console.log(...formData);

        response = await fetch("/api/fruits", {
            method: "POST",
            body: formData
        });

    }

    if(response.status != 200){
        console.log("Posting Error");
    }

    response = await response.json();
    resetForm();
    document.querySelector(".dialog").classList.add("transparent");
    showFruits();
};

const getExoticFruits = () => {
    const inputs = document.querySelectorAll("#description input");
    let fruits = [];

    inputs.forEach((input) => {
        fruits.push(input.value);
    });

    return fruits;
};

const resetForm = () => {
    const form = document.getElementById("edit-fruit");
    form.reset();
    form._id = "-1";
    document.getElementById("description").innerHTML = "";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("title").innerHTML = "Add Exotic Fruit";
    resetForm();
};

const addDescription= (e) => {
    e.preventDefault();
    const section = document.getElementById("description");
    const input = document.getElementById("input");
    input.type = "text";
    section.append(input);
};

window.onload = () => {
    showFruits();
    document.getElementById("edit-fruit").onsubmit = addExoticFruit;
    document.getElementById("add").onclick = showHideAdd;

    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };

    document.getElementById("add-description").onclick = addDescription;
};