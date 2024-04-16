const express = require("express");
const cadastrarUsuario = require("../controladores/usuarios/cadastroUsuario");
const loginDeUsuarios = require("../controladores/usuarios/loginUsuario");
const autenticandoRotas = require("../intermediarios/autenticacao");
const atualizarDadosDoUsuario = require("../controladores/usuarios/atualizarDadosUsuario");
const excluirUsuario = require("../controladores/usuarios/excluirUsuario");

const rotasUsuario = express.Router();

rotasUsuario.post("/usuario", cadastrarUsuario);
rotasUsuario.post("/login", loginDeUsuarios)

rotasUsuario.use(autenticandoRotas)

rotasUsuario.put("/usuario/:id", atualizarDadosDoUsuario);
rotasUsuario.delete("/usuario/:id", excluirUsuario);

module.exports = rotasUsuario;