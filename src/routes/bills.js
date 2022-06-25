//rutas de administración de facturas

const express = require("express");
const billsController = require("../controllers/billsController");

const router = express.Router();

router.get("/", billsController.bills);

module.exports = router;

