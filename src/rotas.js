const express = require("express");
const { listarConta, criarConta, atualizarConta, excluirConta } = require("./controladores/contas");
const { validarSenha, validarConta, validarCPF, validarEmail, verificarExistenciaConta } = require("./intermediarios");
const { validarDeposito, depositar } = require("./controladores/transacoes");
const rotas = express();

rotas.get('/contas', validarSenha, listarConta);
rotas.post('/contas', validarConta, validarCPF, validarEmail, verificarExistenciaConta, criarConta);
rotas.put('/contas/:numeroConta/usuario', validarConta, validarCPF, validarEmail, atualizarConta);
rotas.delete('/contas/:numeroConta', verificarExistenciaConta, excluirConta);

rotas.post('/transacoes/depositar', validarDeposito, depositar);




module.exports = {
    rotas
}