export default function initFetchBitcoin() {
    fetch("https://blockchain.info/ticker")
    .then(response => response.json())
    .then(bitcoin => {
        console.log(bitcoin.BRL.sell);  /// aqui estou pegando o arquivo Json, o objeto BRL e pegando a propriedade SELL
        const btcPreco = document.querySelector(".btc-preco");
        btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4); /// o innerText é para colocar no texto, ou seja, no html o que o json é;
        /// é dividido por 1000 para o bitcoin equivaler a 1000 reais a doação
        /// o .toFixed é para pegar somente 4 casas após a virgula (4 casas decimais)
    }).catch(erro => {   /// o ideial é ter esse 'catch', pois avisa se tem erro no fetch
        console.log(Error(erro));
    })
}








