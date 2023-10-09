const bancodedados = require("../bancodedados");

const validacao = (numeroConta, senha) => {
    if (isNaN(numeroConta)) {
        return { status: 400, mensagem: "Número da conta inválido" };
    }

    if (!numeroConta || !senha) {
        return { status: 400, mensagem: "Número da conta e senha são obrigatórios!" };
    }

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numeroConta);

    if (!contaExistente) {
        return { status: 404, mensagem: "Conta não encontrada!" };
    }

    if (contaExistente.senha !== senha) {
        return { status: 401, mensagem: "Senha incorreta!" };
    }

    return { status: 200, conta: contaExistente };
}

const saldo = (req, res) => {
    const numeroConta = req.query.numero_conta;
    const senha = req.query.senha;
    const contaExistente = validacao(numeroConta, senha);

    if (contaExistente.status === 200) {
        return res.status(200).json({ saldo: contaExistente.conta.saldo });
    } else {
        return res.status(contaExistente.status).json({ mensagem: contaExistente.mensagem });
    }
}

const extrato = (req, res) => {
    const numeroConta = req.query.numero_conta;
    const senha = req.query.senha;
    const contaExistente = validacao(numeroConta, senha);

    if (contaExistente.status === 200) {
        const saques = bancodedados.saques.filter((saque) => saque.numero_conta === numeroConta);
        const depositos = bancodedados.depositos.filter((deposito) => deposito.numero_conta === numeroConta);
        const transferenciasEnviadas = bancodedados.transferencias.filter(
            (transferencia) => transferencia.numero_conta_origem === numeroConta
        );
        const transferenciasRecebidas = bancodedados.transferencias.filter(
            (transferencia) => transferencia.numero_conta_destino === numeroConta
        );
    
        const extratoConta = {
            saques,
            depositos,
            transferenciasEnviadas,
            transferenciasRecebidas,
        };
    
        return res.status(200).json(extratoConta);
    } else {
        return res.status(contaExistente.status).json({ mensagem: contaExistente.mensagem });
    }
}

module.exports = {
    saldo,
    extrato,
    validacao
}
