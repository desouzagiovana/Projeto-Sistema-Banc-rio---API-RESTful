const bancodedados = require("../bancodedados");

const listarConta = (req, res) => {
    return res.json(bancodedados.contas);
}

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    function gerarNumeroUnico() {
        return Date.now().toString();
    }

    const numeroConta = gerarNumeroUnico();

    const novaConta = {
        numero: numeroConta,
        nome: nome,
        cpf: cpf,
        data_nascimento: data_nascimento,
        telefone: telefone,
        email: email,
        senha: senha,
        saldo: 0
    };

    bancodedados.contas.push(novaConta);

    return res.status(201).json();
}

const atualizarConta = (req, res) => {
    const numeroConta = req.params.numeroConta;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numeroConta);

    if (!contaExistente) {
        return res.status(404).json({ mensagem: "Conta não encontrada." });
    }

    contaExistente.nome = nome;
    contaExistente.cpf = cpf;
    contaExistente.data_nascimento = data_nascimento;
    contaExistente.telefone = telefone;
    contaExistente.email = email;
    contaExistente.senha = senha;

    return res.status(204).json();
}

module.exports = {
    listarConta,
    criarConta,
    atualizarConta
}
