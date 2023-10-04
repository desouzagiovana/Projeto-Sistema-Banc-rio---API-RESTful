const bancodedados = require("../bancodedados");

const validarDeposito = (req, res, next) => {
    const { numeroConta, valorDeposito } = req.body;

    if (!numeroConta || valorDeposito <= 0) {
        return res.status(400).json({ mensagem: "Preencha todos os campos!" });
    } else {
        const contaExistente = bancodedados.contas.find(conta => conta.numero === numeroConta);

        if (!contaExistente) {
            return res.status(404).json({ mensagem: "Conta não encontrada." });
        }

        req.contaExistente = contaExistente;

        next();
    }


};

const depositar = (req, res) => {
    const { valorDeposito } = parseFloat(req.body);
    const contaExistente = parseFloat(req.contaExistente);

    contaExistente.saldo += parseFloat(valorDeposito);

    const transacao = {
        data: new Date().toLocaleString(),
        numeroConta: contaExistente.numero,
        tipo: "depósito",
        valor: parseFloat(valorDeposito)
    };

    bancodedados.transacoes.push(transacao);

    return res.status(204).send();
}

module.exports = {
    validarDeposito,
    depositar
}
