/// esse outsideClick é para quando clicar fora do menu, ele fechar o menu ou quando clicar fora do dropdownMenu, ele sair
export default function outsideClick(element, events, callback) {
    const html = document.documentElement;    /// aqui estou selecionando o html, para quando clicar fora do menu do sobre, ele feche
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        setTimeout(() => {html.addEventListener(userEvent, handleOutsideClick)});  /// esse setTimeOut faz o addeventlistener esperar na fila para carregar 
      });

      html.addEventListener('click', handleOutsideClick);  /// aqui estou adicionando o evento de clicar fora e ativando a funcao
      element.setAttribute(outside, '');
    }
    function handleOutsideClick(event) {    /// aqui estou criando a funcao que será ativada no clicar, criei dentro para ela somente  ser criada se for ativiada a funcao
      if(!element.contains(event.target)) {  /// se for falso, por causa do '!', ele irá executar a função de callback, se for verdadeiro, no caso clicar dentro do dropdown-menu, ele não irá executar a função, ou seja, irá ficar aberto
        element.removeAttribute(outside);

        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);  /// para remover o callback do html
        }) 
        callback();
      }
    }
  }



