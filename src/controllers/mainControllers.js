//Controlador de Inicio

const path = require("path");

const mainControllers = {
    homepage: (req, res) => {
        let htmlPath = path.resolve(__dirname, "../views/index.html");
        res.sendFile(htmlPath);        
    }
};

module.exports = mainControllers;