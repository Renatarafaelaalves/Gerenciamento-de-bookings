const express = require("express");
const autenticandoRotas = require("../intermediarios/autenticacao");
const cadastrarContainer = require("../controladores/containner/cadastrarContainer");

const rotasContainer = express.Router();

rotasContainer.use(autenticandoRotas);

rotasContainer.post("/container/cadastrar", cadastrarContainer );

module.exports = rotasContainer;