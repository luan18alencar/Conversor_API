const apiKey = "8c9eef8469cb71cb3974e9fe"; //Chave de acesso à API de taxas de câmbio.
const apiURL = "https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD";  //URL da API, utilizando a chave para construir a requisição

// Função para buscar taxa de câmbio via API 
async function getExchangeRate(daMoeda, paraMoeda) {// Código da moeda de origem (moeda que será convertida).
    //Código da moeda de destino (moeda para a qual a conversão será realizada).
    try{ 
        const response = await fetch(`${apiUrl}${daMoeda}`);
        //Faz a requisição usando fetch para obter a resposta da API.
        const data = await response.json(); 
        //Converte a resposta para JSON usando await response.json().
        if(data.result === "success"){   
            return data.conversion_rates[paraMoeda]; 
         //Verifica se a propriedade result da resposta é igual a "success" (sucesso na requisição).
        }else{ 
            throw new Error('Erro ao buscar as taxas de câmbio'); 
        //Se for sucesso, retorna a taxa de câmbio para a moeda de destino (data.conversion_rates[paraMoeda]).
        } 
    }catch(error){ 
        //Registra o erro no console (console.error).
        console.error("Erro:", error); 
        return null; 
        //Caso Erro
        //Retorna null para indicar que a taxa de câmbio não foi obtida.
    } 
 }; 
 document.getElementById("currency-form").addEventListener('submit', async function(event){ 
    event.preventDefault(); 
    //Ao clicar no botão de submit do formulário, a função dentro do event listener é executada.
    const valor = parseFloat(document.getElementById('amount').value); 

    const daMoeda = document.getElementById('daMoeda').value; 
    const paraMoeda = document.getElementById('paraMoeda').value; 
    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda); //Chama a função getExchangeRate para obter a taxa de câmbio, passando os valores de daMoeda e paraMoeda.
    if(exchangeRate){ //Faz uma requisição à API para obter a taxa de câmbio entre as moedas especificadas.
        const convertedValue = valor * exchangeRate; // Se a taxa de câmbio for válida (exchangeRate), calcula o valor convertido
        const conversao = document.getElementById('result');// Atualiza o elemento de exibição do resultado (const conversao = document.getElementById('result')) com o valor convertido formatado com duas casas decimais e a moeda de destino (conversao.textContent = ...).
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`; 
    }else{ 
        alert('Não foi possível buscar o valor da cotação!'); 
    } 
 });