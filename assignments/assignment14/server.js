const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let fruits = [
    {
        _id: 1,
        name: "Açaí Berries",
        color: "Deep Purple",
        family: "Arecaceae",
        place: ["South America", "Central America"],
        growth: "Grows on a plam tree.",
        image: "images/acai.png ",
        description: "Açaí berries, native to the Amazon rainforest, are renowned for their rich purple hue and are celebrated for being packed with antioxidants and essential nutrients."
    },
    {
        _id: 2,
        name: "Ackee",
        color: "Orange/Yellow ",
        family: "Sapindaceae",
        place: ["West Africa"],
        growth: "Grows on evergreen trees. ",
        image: "images/ackee.jpg",
        description: "Ackee is a tropical fruit known for its creamy texture and mild flavor, commonly used in Caribbean cuisine, especially in the popular dish ackee and saltfish."
    },
    {
        _id: 3,
        name: "Densuke Watermelon",
        color: "Black",
        family: "Cucurbitaceae ",
        place: ["Japan"],
        growth: "Grows on vines. ",
        image: "images/dwater.jpg",
        description: "Densuke watermelons are prized for their distinctive black rind, exceptional sweetness, and rarity, as they are primarily grown on the Japanese island of Hokkaido."
    },
    {
        _id: 4,
        name: "Dragon Fruit",
        color: "Pink or Yellow",
        family: "Cactaceae",
        place: ["Southern Mexico", "Central America"],
        growth: "Groes on a hylocereus cactus.",
        image: "images/dragon-fruit.jpg",
        description: "Dragon fruit, also known as pitaya or pitahaya, is a vibrant and exotic tropical fruit with a mildly sweet flavor and a visually striking appearance, featuring a unique combination of bright pink or yellow skin adorned with green, spiky scales."
    },
    {
        _id: 5,
        name: "Guava",
        color: "Green",
        family: "Myrtaceae",
        place: ["Central America", "Caribbean"],
        growth: "Grows on a small tree.",
        image: "images/guava.jpg",
        description: "Guava is a tropical fruit known for its sweet and fragrant flavor, often used in culinary applications and valued for its rich content of vitamins and antioxidants."
    },
    {
        _id: 6,
        name: "Passion Fruit",
        color: "Deep Purple or Yellow",
        family: "Passifloraceae",
        place: ["Southtern Brazil", "Paraguay"],
        growth: "Grows on a vine.",
        image: "images/passionfruit.jpg ",
        description: "The vibrant and aromatic passion fruit, with its wrinkled purple or yellow exterior, encases a burst of sweet-tart pulp that tantalizes the taste buds with a tropical symphony of flavors."
    }
];

app.get("/api/fruits", (req, res) => {
    res.send(fruits);
});

app.post("/api/fruits", (req, res) => {
    const result = validateFruit(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const fruits = {
        _id: fruits.length + 1,
        name: req.body.name,
        color: req.body.color,
        family: req.body.family,
        place: req.body.place.split(","),
        growth: req.body.growth,
        image: req.body.image.img,
        description: req.body.description
    }

    fruits.push(fruits);
    res.send(fruits);
});

const validateFruit = (fruits) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        name: Joi.string().min(3).required(),
        color: Joi.string().min(3).required(),
        family: Joi.string().min(3).required(),
        place: Joi.string().min(3).required(),
        growth: Joi.string().min(3).required(),
        image: Joi.allow(),
        description: Joi.allow()
    });

    return schema.validate(fruits);
};

app.listen(3000, () => {
    console.log("I'm Listening");
});