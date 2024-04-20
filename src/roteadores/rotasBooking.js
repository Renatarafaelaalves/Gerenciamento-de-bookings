const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarBooking = require("../controladores/bookings/cadastrarBooking");
const detalharBooking = require("../controladores/bookings/detalharBooking");
const excluirBooking = require("../controladores/bookings/excluirBooking");
const listarBooking = require("../controladores/bookings/listarBooking");

const rotasBooking = express.Router();

rotasBooking.use(autenticandoRotas);

rotasBooking.post("/booking/cadastrar", cadastrarBooking);
rotasBooking.get("/booking/detalhar/:id", detalharBooking);
rotasBooking.delete("/booking/excluir/:id", excluirBooking);
rotasBooking.get("/booking/listar", listarBooking);

module.exports = rotasBooking;
