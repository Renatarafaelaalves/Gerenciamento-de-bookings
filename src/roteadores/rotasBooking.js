const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarBooking = require("../controladores/bookings/cadastrarBooking");

const rotasBooking = express.Router();

rotasBooking.use(autenticandoRotas);

rotasBooking.post("/booking/cadastrar", cadastrarBooking);

module.exports = rotasBooking