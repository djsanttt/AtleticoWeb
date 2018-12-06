const express = require("express"); //Requiero express para usar el modulo Router
const router = express.Router();
const controller = require("../controllers/controlador");

/*
const nombres =
{
    title: "Torneo Juvenil - Club Atletico Ayacucho",
    navbar: "Club Atletico Ayacucho"
};*/

router.get("/", controller.home);

router.get("/contact", controller.contact);

router.get("/nacional", controller.nacional);

router.get("/paralelo", controller.paralelo);


module.exports = router;