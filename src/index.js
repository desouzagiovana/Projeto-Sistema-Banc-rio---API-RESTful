const express = require("express");
const bancodedados = require("./bancodedados");
const app = express();

const validarSenha = (req, res, next) => {
    const senha = req.query.senha_banco;
    const senhaBanco = bancodedados.banco.senha;

    if (senha === senhaBanco) {
        next();
    } else {
        return res.status(401).json({ mensagem: `A senha informada é inválida!` });
    }
}

app.get('/contas', validarSenha, (req, res) => {
    const contas = bancodedados.contas;
    return res.status(200).json(contas);
});

app.listen(3000);
