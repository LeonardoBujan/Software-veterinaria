const express = require ("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "./public");

//Require de rutas
const routesBills = require("./src/routes/bills.js");
const routesMain = require("./src/routes/main.js");
const routesPatients = require("./src/routes/patients.js");
const routesProducts = require("./src/routes/products.js");
const routesTurns = require("./src/routes/turns.js");


app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
});

app.use(express.static(publicPath));

//Rutas
app.use("/", routesMain);
app.use("/facturas", routesBills);
app.use("/pacientes", routesPatients);
app.use("/productos", routesProducts);
app.use("/turnos", routesTurns);
