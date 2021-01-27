export default function outsideClick(element, events, callback) {
  const html = document.documentElement;  // estou selecionando meu html
  const outside = 'data-outside';  /// data-outside é para verificar se tem o atributo

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');   /// aqui é para adicionar o data-outside
  }
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) { /// esse element é o que eu passo por outro arquivo, como o do menu-mobile, eu passo o 
      element.removeAttribute(outside);   /// aqui é para remover o data-outside
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);  /// estou removendo para não ficar na lista um monte de script dizendo que sai do menu
      })
      callback();
    }
  }
}



