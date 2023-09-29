const express = require("express");
const { rotasConta } = require("./rotas");
const { validarSenha } = require("./intermediarios");

const app = express();

app.use(validarSenha);
app.use(rotasConta);

app.listen(3000);

