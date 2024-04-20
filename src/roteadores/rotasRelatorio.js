const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const relatorioPorCliente = require("../controladores/relatorios/relatorioPorCliente");
const relatorioPorBooking = require("../controladores/relatorios/relatorioPorBooking");
const relatorioPorContainer = require("../controladores/relatorios/relatorioPorContainer");


const rotasRelatorio = express.Router();

rotasRelatorio.use(autenticandoRotas);

rotasRelatorio.get("/relatorio/cliente/:id", relatorioPorCliente);
rotasRelatorio.get("/relatorio/booking/:id", relatorioPorBooking);
rotasRelatorio.get("/relatorio/container/:id", relatorioPorContainer);


module.exports = rotasRelatorio;