// Selecionando os elementos do formulário e da página
const form = document.getElementById('currency-form'); // cria const para o formulário
const amountInput = document.getElementById('amount'); // cria const para campo onde o usuário insere o valor para conversão
const fromCurrency = document.getElementById('from-currency'); // cria const para armazenar moeda de origem para conversão
const toCurrency = document.getElementById('to-currency'); // cria const para armazenar moeda de destino
const resultDiv = document.getElementById('result'); // cria const para onde o resultado será exibido
const resetButton = document.getElementById('reset'); // cria const para botão que limpa o formulário

function getConversionRate(from, to) {
    const url = `https://economia.awesomeapi.com.br/last/${from}-${to}`; // URL da API: A URL da API é formatada dinamicamente com as moedas selecionadas (from e to). Por exemplo, se o usuário selecionar "USD" para "from" e "BRL" para "to", a URL será: https://economia.awesomeapi.com.br/last/USD-BRL.
    return fetch(url) //cria um fetch na url sendo resolvido apenas quando a url retorna um valor ao fetch
        .then(response => response.json())
        .then(data => {
            // O nome do par de moedas será no formato "FROM TO" (ex: USDBRL, EURUSD)
            const conversionKey = `${from}${to}`; // cria const puxando propiedades da url from=de to=para (representado como a junção das moedas ex: USDBRL)
            return data[conversionKey].bid; // agora o campo acessa a função bid que representa o valor de cotação da moeda de origem em relação a moeda de destino
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
            resultDiv.innerHTML = 'Erro ao buscar dados da conversão. Tente novamente mais tarde.';
        }); // esse campo serve para relatar caso ocorra algum erro quando o código for se comucar com a API, caso ocorra o erro ele armazena o mesmo no campo catch e após exibira o erro na tela
        
}