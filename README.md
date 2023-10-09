## Projeto Sistema Bancário - API RESTful🏦💸

Este é um projeto de um sistema bancário que oferece uma API RESTful para realizar operações bancárias, como criar contas, fazer depósitos, saques e transferências, consultar saldo e extrato de contas. O sistema foi desenvolvido como parte do desafio do módulo 2 do curso B2B Cubos Academy / iFood.

## Funcionalidades Principais

- ***Criação de Contas:*** Os usuários podem criar novas contas bancárias fornecendo informações pessoais válidas, como nome, CPF, e-mail e senha.

- ***Depósitos:*** Os titulares de contas podem realizar depósitos em suas contas fornecendo o número da conta e o valor do depósito.

- ***Saques:*** Os titulares de contas podem fazer saques de suas contas, desde que tenham saldo disponível e forneçam a senha correta.

- ***Transferências:*** É possível transferir dinheiro entre contas, desde que o número da conta de origem, o número da conta de destino, o valor da transferência e a senha sejam fornecidos corretamente.

- ***Consulta de Saldo:*** Os titulares de contas podem verificar o saldo de suas contas fornecendo o número da conta e a senha.

- ***Consulta de Extrato:*** É possível obter um extrato detalhado das transações de uma conta, incluindo saques, depósitos e transferências.

## Como Usar 🛠️

Para usar esta API, siga os seguintes passos:

1. **Instalação:** Clone este repositório em sua máquina local usando o seguinte comando:

   ```bash
   git clone https://github.com/desouzagiovana/desafio-backend-modulo-02-sistema-bancario-b2b-ifood-t09.git


2. **Uso da API:**  Inicie o servidor da API. Você pode usar um cliente HTTP, como o Postman, ou fazer chamadas HTTP diretas para as rotas da API.
   
   ***O servidor estará em execução em http://localhost:3000***

## Endpoints📜
- **GET /contas: Lista todas as contas.**
- **POST /contas: Cria uma nova conta.**
- **PUT /contas/:numeroConta/usuario: Atualiza os dados de um usuário de conta.**	
- **DELETE /contas/:numeroConta: Exclui uma conta.**			
- **POST /transacoes/depositar: Realiza um depósito em uma conta.**
- **POST /transacoes/sacar: Realiza um saque em uma conta.**		
- **POST /transacoes/transferir: Realiza uma transferência entre contas.**
- **GET /contas/saldo: Consulta o saldo de uma conta.**
- **GET /contas/extrato: Consulta o extrato de uma conta.**
  
## Contribuições🤝🏼
Contribuições são bem-vindas! Se você deseja contribuir para este projeto:

Faça um fork do projeto.

Crie uma nova branch para sua contribuição: 
```bash
git checkout -b feature/sua-feature.
```

Faça suas alterações e commit: 
```bash
git checkout -b feature/sua-feature.
 ```

Envie suas alterações: 
```bash
git push origin feature/sua-feature.
```
  
Crie um pull request para que suas alterações sejam revisadas e mescladas.
