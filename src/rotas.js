const express = require("express");
const { listarContas } = require("./controladores/contas");

const rotasConta = express();

rotasConta.get('/contas', listarContas);

module.exports = {
    rotasConta
}