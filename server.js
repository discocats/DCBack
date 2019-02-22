const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.get("/hello", (req, res) => {
    res.send({
        age : 15,
    });
});

app.listen(3000, () => console.log("started"));