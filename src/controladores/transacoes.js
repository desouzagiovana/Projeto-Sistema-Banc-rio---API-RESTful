const bancodedados = require("../bancodedados");

const depositar = (req, res) => {
    const contaExistente = req.contaExistente;
    const valorDeposito = parseFloat(req.valorTransacao);

    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        return res.status(400).json({ mensagem: "O valor do depósito deve ser um número maior que zero!" });
    }

    contaExistente.saldo += valorDeposito;

    const transacao = {
        data: new Date().toLocaleString(),
        numero_conta: contaExistente.numero,
        tipo: "depósito",
        valor: valorDeposito
    };

    bancodedados.depositos.push(transacao);

    return res.status(204).send();
}

const sacar = (req, res) => {
    const contaExistente = req.contaExistente;
    const valorSaque = parseFloat(req.valorTransacao);
    const senha = req.body.senha;

    if (isNaN(valorSaque) || valorSaque <= 0) {
        return res.status(400).json({ mensagem: "O valor do saque deve ser um número maior que zero!" });
    }

    if (contaExistente.saldo < valorSaque) {
        return res.status(400).json({ mensagem: "Saldo insuficiente para realizar o saque!" });
    }

    if (senha !== contaExistente.senha) {
        return res.status(401).json({ mensagem: "Senha incorreta!" });
    }

    contaExistente.saldo -= valorSaque;

    const transacao = {
        data: new Date().toLocaleString(),
        numero_conta: contaExistente.numero,
        tipo: "saque",
        valor: valorSaque
    };

    bancodedados.saques.push(transacao);

    return res.status(204).send();
}

module.exports = {
    depositar,
    sacar
}
