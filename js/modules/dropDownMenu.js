import outsideClick from './outsideClick.js';

export default function initDropDownMenu() {  
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
      event.preventDefault(); /// para ele não ir para a página de sobre.html, ele ficar no index.html
      this.classList.add('ativo');/// aqui estou falando com o item 'menu' do dropdownMenus (o this é referente ao menu)
      outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('ativo');
      });
    };

    dropdownMenus.forEach(menu => {
      ['touchstart', 'click'].forEach(userEvent => { /// criei um array para adicionar os dois eventos, o de touch para mobile e o de clicar para dekstop
        menu.addEventListener(userEvent, handleClick);
      }); /// o toutchstart é melhor que o clique para mobile, pois ele começa na hora enquanto o click no mobile demora 300 milisegundos
    });
}

