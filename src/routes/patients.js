//rutas de administración de pacientes

const express = require ("express");
const patientsControllers = require("../controllers/patientsController");

const router = express.Router();

router.get("/", patientsControllers.patients);

module.exports = router;