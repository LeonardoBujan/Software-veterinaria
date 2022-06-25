//Controlador de Inicio

const path = require("path");

const mainControllers = {
    index: (req, res) => {
        res.render("index");
    },    
    home: (req, res) => {
        res.render("home");
    }
};

module.exports = mainControllers;