const express = require("express");
const cadastrarUsuario = require("../controladores/usuarios/cadastroUsuario");
const loginDeUsuarios = require("../controladores/usuarios/loginUsuario");
const autenticandoRotas = require("../intermediarios/autenticacao");

const rotasUsuario = express.Router();

rotasUsuario.post("/usuario", cadastrarUsuario);
rotasUsuario.post("/login", loginDeUsuarios)

rotasUsuario.use(autenticandoRotas)



module.exports = rotasUsuario;