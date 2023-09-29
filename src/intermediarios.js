const bancodedados = require("./bancodedados");

const validarSenha = (req, res, next) => {
    const senha = req.query.senha_banco;
    const senhaBanco = bancodedados.banco.senha;
    if (senha === senhaBanco) {
        next();
    } else {
        return res.status(401).json({ mensagem: `A senha informada é inválida!` });
    }
}

module.exports = {
    validarSenha
}