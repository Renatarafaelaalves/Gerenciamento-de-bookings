require("dotenv").config();
const express = require("express");
const rotasUsuario = require("./roteadores/rotasUsuario");
const rotasCliente = require("./roteadores/rotasCliente");
const rotasBooking = require("./roteadores/rotasBooking");
const rotasContainer = require("./roteadores/rotasContainer");
const rotasRelatorio = require("./roteadores/rotasRelatorio");

const app = express();

app.use(express.json());
app.use(rotasUsuario);
app.use(rotasCliente);
app.use(rotasBooking);
app.use(rotasContainer);
app.use(rotasRelatorio);


app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando na porta 3000");
});
