const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const sweets = [
    { imageBigUrl: "dist/img/tetes_brulees_blueberry_Big.png", imageUrl: "dist/img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageBigUrl: "dist/img/top_pops_berry_Big.png", imageUrl: "dist/img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageBigUrl: "dist/img/top_pops_watermelon_Big.png", imageUrl: "dist/img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33},
    { imageBigUrl: "dist/img/tetes_brulees_blueberry_Big.png", imageUrl: "dist/img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageBigUrl: "dist/img/top_pops_berry_Big.png", imageUrl: "dist/img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageBigUrl: "dist/img/top_pops_watermelon_Big.png", imageUrl: "dist/img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33},
    { imageBigUrl: "dist/img/tetes_brulees_blueberry_Big.png", imageUrl: "dist/img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageBigUrl: "dist/img/top_pops_berry_Big.png", imageUrl: "dist/img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageBigUrl: "dist/img/top_pops_watermelon_Big.png", imageUrl: "dist/img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33},
    { imageBigUrl: "dist/img/tetes_brulees_blueberry_Big.png", imageUrl: "dist/img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageBigUrl: "dist/img/top_pops_berry_Big.png", imageUrl: "dist/img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageBigUrl: "dist/img/top_pops_watermelon_Big.png", imageUrl: "dist/img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33},
    { imageBigUrl: "dist/img/tetes_brulees_blueberry_Big.png", imageUrl: "dist/img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageBigUrl: "dist/img/top_pops_berry_Big.png", imageUrl: "dist/img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageBigUrl: "dist/img/top_pops_watermelon_Big.png", imageUrl: "dist/img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33},
    { imageBigUrl: "dist/img/tetes_brulees_blueberry_Big.png", imageUrl: "dist/img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageBigUrl: "dist/img/top_pops_berry_Big.png", imageUrl: "dist/img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageBigUrl: "dist/img/top_pops_watermelon_Big.png", imageUrl: "dist/img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33}
];
app.get("/products", (req, res) => {
    res.send(sweets);
});

app.listen(3000, () => console.log("started"));
