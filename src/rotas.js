const express = require("express");
const { listarConta, criarConta, atualizarConta } = require("./controladores/contas");
const { validarSenha, validarConta, validarCPF, validarEmail, verificarExistenciaConta } = require("./intermediarios");

const rotas = express();

rotas.get('/contas', validarSenha, listarConta);
rotas.post('/contas', validarConta, validarCPF, validarEmail, verificarExistenciaConta, criarConta);
rotas.put('/contas/:numeroConta/usuario', validarConta, validarCPF, validarEmail, verificarExistenciaConta, atualizarConta);

module.exports = {
    rotas
}