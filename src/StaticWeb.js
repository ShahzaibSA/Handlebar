const epxress = require("express");
const path = require("path");
const app = epxress();
const port = 5000;

const staticPath = path.join(__dirname, "/public/Web");

//! Node JS Built in Middle Ware
app.use(epxress.static(staticPath));

app.get("/", (req, res) => {
    res.send("This is Home Page");
});

app.listen(port, () => {
    console.log("Server is Running");
})