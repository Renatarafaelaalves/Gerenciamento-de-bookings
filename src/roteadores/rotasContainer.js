const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarContainer = require("../controladores/containner/cadastrarContainer");
const listarContainer = require("../controladores/containner/listarContainer");
const detalharContainer = require("../controladores/containner/detalharContainer");
const excluirContainer = require("../controladores/containner/excluirContainer");


const rotasContainer = express.Router();

rotasContainer.use(autenticandoRotas);

rotasContainer.post("/container/cadastrar", cadastrarContainer );
rotasContainer.get("/container/listar", listarContainer);
rotasContainer.get("/container/detalhar/:id", detalharContainer);
rotasContainer.delete("/container/excluir/:id", excluirContainer);

module.exports = rotasContainer;