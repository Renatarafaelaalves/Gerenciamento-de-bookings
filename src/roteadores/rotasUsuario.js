const express = require("express");
const cadastrarUsuario = require("../controladores/usuarios/cadastroUsuario");

const rotasUsuario = express.Router();

rotasUsuario.post("/usuario", cadastrarUsuario);


module.exports = rotasUsuario;