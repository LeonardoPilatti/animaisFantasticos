export default function initAnimaNumeros() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]');
        numeros.forEach((numeroItem) => {
            const total = +numeroItem.innerText;  /// aqui criei uma constante para pegar os numeros que estão dentro do Span com o InnerText e o '+' na frente do numeroItem é para transformar a string do innerText em Number;
            const incremento = Math.floor(total / 100);   /// criei essa constante para os numeros carregarem relativo ao tamanho dele, pois pega o total e divide por 100, o resultado disso é que irá somar para ele carregar e o math.floor é para ele arredondar o numero, para não ficar com virgula
            let start = 0;
            const timer = setInterval(() => {
                start = start + incremento; /// para somar no start que começa em zero;
                numeroItem.innerText = start;    /// por causa disso que anima o numero do site, que ele começa a contar;
                if(start > total) {   /// se o start for menor que o total, o total é os numeros que estão dentro do span
                    numeroItem.innerText = total;
                    clearInterval(timer)
                }
            }, 25 * Math.random());    /// 25 é o tempo que quero animar vezes Math.random que gera um numero aleatorio, ou seja, sempre irá animar diferente
        });
    }
    function handleMutation(mutation) {   /// aqui pode ser qualquer nome nos parametros, coloquei mutation, mas é tipo o 'event'
        if(mutation[0].target.classList.contains('ativo')) {   /// aqui estou verificando se for true, se ele contem a classe de ativo, ele irá executar a funcao de contar o numero
            observer.disconnect();  // aqui estou desconectando a funcao de ele observar se está no scroll ou não;
            animaNumeros(); // aqui estou ativando a funcao acima, para ele contar
        }
    }
    const observerTarget = document.querySelector('.numeros');  /// esse observerTarget é o alvo que o observer deve obeservar se teve alguma mudança, no caso, se recebeu a classe de ativo;
    /// estou criando uma constante para observar se vai ter algo mudando na section dos numeros, pois se tiver algo que mudou, ele irá iniciar
    /// a contagem, para sempre que chegar na section, ela começar a contar, no caso o que está mudando é que ela está recebendo a classe
    /// de ativo quando faço o scroll nela, pois está com a animação de scroll-animação.css
    const observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, {attributes: true});  /// aqui estou dizendo para o observer observar o observerTarget que é o alvo e estou passando o objeto de attributes, para ele verificar os atributos, que são as classes
}

