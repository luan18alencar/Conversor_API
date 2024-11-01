// Selecionando os elementos do formulário e da página
const form = document.getElementById('currency-form'); // cria const para o formulário
const amountInput = document.getElementById('amount'); // cria const para campo onde o usuário insere o valor para conversão
const fromCurrency = document.getElementById('from-currency'); // cria const para armazenar moeda de origem para conversão
const toCurrency = document.getElementById('to-currency'); // cria const para armazenar moeda de destino
const resultDiv = document.getElementById('result'); // cria const para onde o resultado será exibido
const resetButton = document.getElementById('reset'); // cria const para botão que limpa o formulário