// eu quero falar com cada item da lista, então uso o .js-tabmenu com o "LI", tenho que chamar eles para modificar aqui no js
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabConteudo = document.querySelectorAll('.js-tabconteudo section');

// o if está em tudo para verificar se tem o tabmenu e tabconteudo, pois se tiver, aí executa o código, se não tiver, não faz, os dois devem ser verdadeiros (&&)
if(tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add('ativo');  /// nesse estou adicionando ao primeiro item da lista (sempre começa pelo zero), para
                                            /// adicionar a classe ativo de inicio, para entrar no site e já aparecer
    // console.log(tabConteudo);   para testar se pegou o conteudo certo;

    // nesta função eu estou removendo a classe ativo da section, que pode ser qualquer nome, para não poder ficar duas sections com a 
    // classe de ativo, aí depois eu adiciono a classe de ativo para a que quero. OBS: Uso o ForEach pq ele remove de cada item daí  
    function activeTab(index) {
        tabConteudo.forEach((section) => {
            section.classList.remove('ativo');
        })
        tabConteudo[index].classList.add('ativo');
    }

    // o primeiro item é o nome do que quero (argumento), o segundo item é a posicao (index), o => é da Arrow Function,
    // em cada evento estou adicionando o "click", pois é um loop o forEach e irá executar a funcao activeTab(index)
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click' , () => {               /// ou ('click' , function() { aí pula linha e coloca o que quer da funcao })
            activeTab(index)
        })
    })
}


/// eu adiciona a classe que quero animar no HTML, aí venho aqui no JS e cria as duas const, a funcao e o foreach chamando a funcao
/// e aí vou no css e crio as classes para mexer no CSS com a animacao para ficar melhor e adiciona no animais-lista, o cursor pointer
/// no CSS, para dizer ao usuario que é clicavel