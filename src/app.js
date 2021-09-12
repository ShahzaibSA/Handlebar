const epxress = require("express");
const hbs = require("hbs");
const path = require('path');
const app = epxress();
const port = process.env.PORT || 5000;

// const staticPath = path.join(__dirname, "/public/Web");

const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templatePath);

const pubDir = path.join(__dirname, "../public/images")
console.log("Pbu Dir", pubDir);
//! Node JS Built in MiddleWare
app.use(epxress.static(pubDir));

hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index", {
        userName: "Shahzaib Ahmed SA"
    });
});

app.get("/temp", (req, res) => {
    // res.write(`Your City Name: ${req.query.name}`);
    // console.log('City :>> ', req.query.name);
    res.send(`Your City Name: ${req.query.name}`);
});


app.listen(port, () => {
    console.log("Server is Running");
})