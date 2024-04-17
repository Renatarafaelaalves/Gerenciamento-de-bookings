const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarBooking = require("../controladores/bookings/cadastrarBooking");
const detalharBooking = require("../controladores/bookings/detalharBooking");

const rotasBooking = express.Router();

rotasBooking.use(autenticandoRotas);

rotasBooking.post("/booking/cadastrar", cadastrarBooking);
rotasBooking.get("/booking/detalhar/:id", detalharBooking);

module.exports = rotasBooking;
