const bancodedados = require("../bancodedados");
const { validarSenha } = require("../intermediarios");

const listarContas = (req, res) => {
    return res.json(bancodedados.contas);
}

module.exports = {
    listarContas
}