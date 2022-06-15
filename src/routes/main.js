//rutas de administración de Inicio

const express = require("express");
const mainControllers = require("../controllers/mainControllers.js");

const router = express.Router();

router.get("/", mainControllers.homepage);

module.exports = router;