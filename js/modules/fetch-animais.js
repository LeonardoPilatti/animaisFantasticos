import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
    async function fetchAnimais(url) {
        try {   /// tente fazer isso, se não conseguir, faz o catch, que é um aviso de erro
        const animaisResponse = await fetch(url);
        const animaisJSON = await animaisResponse.json();
        const numerosGrid = document.querySelector('.numeros-grid')
    
       // console.log(animaisJSON);  // aqui irá me retornar um Array com o que está dentro do arquivo animaisApi.json
    
        animaisJSON.forEach(animal => {  /// aqui estou fazendo um looping nos itens do array do json
           const divAnimal = createAnimal(animal);
          // console.log(divAnimal)
          numerosGrid.appendChild(divAnimal)
        });
        initAnimaNumeros();
    } catch(erro){
        console.log(erro);
    }
}
    
    
    function createAnimal(animal) {
        //console.log(animal);
        const div = document.createElement('div');  /// aqui estou criando uma div para ficar igual ao html
        div.classList.add('numero-animal');     /// aqui estou adicionando a classe de numero-animal na div no html
    
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;    /// aqui estou adicionando o animal.specia dentor de um h3 dentro da div
    
        return div;
    
        // console.log(div);
    
    }
    
    
    fetchAnimais('./animaisApi.json');  /// aqui estou ativando a funcao fetchAnimais e passando a url do arquivo Json
}



