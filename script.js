// eu quero falar com cada item da lista, então uso o .js-tabmenu com o "LI", tenho que chamar eles para modificar aqui no js
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabConteudo = document.querySelectorAll('.js-tabconteudo section');
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