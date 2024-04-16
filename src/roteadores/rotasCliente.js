const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarCliente = require("../controladores/clientes/cadastrarCliente");
const editarDadosdoCliente = require("../controladores/clientes/atualizarDadosCliente");
const listarCliente = require("../controladores/clientes/listarCliente");
const excluirCliente = require("../controladores/clientes/excluirCliente");

const rotasCliente = express.Router();

rotasCliente.use(autenticandoRotas);

rotasCliente.post("/cliente", cadastrarCliente);
rotasCliente.put("/cliente/:id", editarDadosdoCliente);
rotasCliente.get("/cliente", listarCliente);
rotasCliente.delete("/cliente/:id", excluirCliente);

module.exports = rotasCliente