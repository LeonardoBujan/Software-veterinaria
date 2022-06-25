//rutas de administración de turnos

const express = require("express");
const turnsController = require("../controllers/turnsController");

const router = express.Router();

router.get("/", turnsController.turns);

module.exports = router;