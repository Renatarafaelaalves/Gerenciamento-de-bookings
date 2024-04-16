const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarCliente = require("../controladores/clientes/cadastrarCliente");
const editarDadosdoCliente = require("../controladores/clientes/atualizarDadosCliente");

const rotasCliente = express.Router();

rotasCliente.use(autenticandoRotas);

rotasCliente.post("/cliente", cadastrarCliente);
rotasCliente.put("/cliente/:id", editarDadosdoCliente)

module.exports = rotasCliente