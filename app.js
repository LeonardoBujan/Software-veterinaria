const express = require ("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "./public");

//Require de rutas
const routesMain = require("./src/routes/main.js");
const routesBills = require("./src/routes/bills.js");
const routesPatients = require("./src/routes/patients.js");
const routesProducts = require("./src/routes/products.js");
const routesTurns = require("./src/routes/turns.js");


app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
});

//Compartir la carpeta public con las vistas
app.use(express.static(publicPath));

//Template Engine
app.set("view engine", "ejs");

//Rutas
app.use("/", routesMain);
app.use("/menu/ventas", routesBills);
app.use("/menu/pacientes", routesPatients);
app.use("/menu/productos", routesProducts);
app.use("/menu/turnos", routesTurns);
