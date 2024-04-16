const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarCliente = require("../controladores/clientes/cadastrarCliente");


const rotasCliente = express.Router();

rotasCliente.use(autenticandoRotas);

rotasCliente.post("/cliente", cadastrarCliente)


module.exports = rotasCliente