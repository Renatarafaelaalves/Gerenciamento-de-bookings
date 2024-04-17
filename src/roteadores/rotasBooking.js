const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarBooking = require("../controladores/bookings/cadastrarBooking");
const detalharBooking = require("../controladores/bookings/detalharBooking");
const excluirBooking = require("../controladores/bookings/excluirBooking");

const rotasBooking = express.Router();

rotasBooking.use(autenticandoRotas);

rotasBooking.post("/booking/cadastrar", cadastrarBooking);
rotasBooking.get("/booking/detalhar/:id", detalharBooking);
rotasBooking.delete("/booking/excluir/:id", excluirBooking);

module.exports = rotasBooking;
