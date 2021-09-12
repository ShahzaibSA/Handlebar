const epxress = require("express");
const hbs = require("hbs");
const app = epxress();
const port = 5000;

app.set('view engine', 'hbs');

app.get("", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log("Server is Running");
})