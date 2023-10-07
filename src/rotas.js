const express = require("express");
const { listarConta, criarConta, atualizarConta, excluirConta } = require("./controladores/contas");
const { validarSenha, validarConta, validarCPF, validarEmail, verificarExistenciaConta, validarTransacao } = require("./intermediarios");
const { depositar, sacar, transferir } = require("./controladores/transacoes");
const rotas = express();

rotas.get('/contas', validarSenha, listarConta);
rotas.post('/contas', validarConta, validarCPF, validarEmail, verificarExistenciaConta, criarConta);
rotas.put('/contas/:numeroConta/usuario', validarConta, validarCPF, validarEmail, atualizarConta);
rotas.delete('/contas/:numeroConta', verificarExistenciaConta, excluirConta);

rotas.post('/transacoes/depositar', validarTransacao, depositar);
rotas.post('/transacoes/sacar', validarTransacao, sacar);
rotas.post('/transacoes/transferir', transferir);



module.exports = {
    rotas
}