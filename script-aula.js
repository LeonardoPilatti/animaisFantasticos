const h1 = document.querySelector('h1');

console.log(Object.prototype.toString.call(h1));  /// estou transformando o H1 em string com o 'ToString' e usando o 'Call' para ver o que é
// [object HTMLHeadingElement]  // sai isso aqui no console, portando h1 é 'HTMLHeadingElement'

console.log(HTMLHeadingElement.prototype); /// para ver todas as funções dos construtores do HTMLHeadingElement;

console.log(h1.dataset);


