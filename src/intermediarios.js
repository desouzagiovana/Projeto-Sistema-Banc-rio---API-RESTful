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

const validarConta = (req, res, next) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: "Obrigatório preencher todos os campos!" });
    } else {
        next();
    }
}

const validarCPF = (req, res, next) => {
    const { cpf } = req.body;

    if (cpf.length !== 11) {
        return res.status(400).json({ mensagem: "O CPF deve ter 11 dígitos." });
    }

    next();
};

const validarEmail = (req, res, next) => {
    const { email } = req.body;

    const emailRegex = /^[a-z][a-z0-9._]*@[a-z0-9]+\.[a-z]{2,}$/;
    if (!email.match(emailRegex)) {
        return res.status(400).json({ mensagem: "O email informado não é válido." });
    }

    next();
};

const verificarExistenciaConta = (req, res, next) => {
    const { cpf, email } = req.body;

    const contaExistente = bancodedados.contas.find(conta => conta.cpf === cpf || conta.email === email);
    if (contaExistente) {
        return res.status(400).json({ mensagem: "Já existe uma conta com o CPF ou email informado." });
    } else {
        next();
    }
}

const validarTransacao = (req, res, next) => {
    const { numero_conta, valor } = req.body;

    if (!numero_conta || valor <= 0) {
        return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios e devem ser maiores que zero!" });
    }

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numero_conta);

    if (!contaExistente) {
        return res.status(404).json({ mensagem: "Conta não encontrada." });
    }

    req.contaExistente = contaExistente;
    req.valorTransacao = valor;

    next();
};

module.exports = {
    validarSenha,
    validarConta,
    validarCPF,
    validarEmail,
    verificarExistenciaConta,
    validarTransacao
}