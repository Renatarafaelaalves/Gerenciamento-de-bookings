require("dotenv").config();
const express = require("express");
const rotasUsuario = require("./roteadores/rotasUsuario");
const rotasCliente = require("./roteadores/rotasCliente");

const app = express();

app.use(express.json());
app.use(rotasUsuario);
app.use(rotasCliente);


app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando na porta 3000");
});
