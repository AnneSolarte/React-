const express = require("express");
const router = express.Router();

const articleController = require("../Controllers/Article"); // Importa el controlador correctamente

//TEST ROUTERS
router.get("/router-test", articleController.controller);
router.get("/curso", articleController.course);

//USEFULL ROUTERS
router.post("/create", articleController.create);

module.exports = router;