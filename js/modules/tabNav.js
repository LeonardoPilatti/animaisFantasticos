export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabConteudo = document.querySelectorAll('[data-tab="conteudo"] section');

  if(tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add('ativo');

    function activeTab(index) {
      tabConteudo.forEach((section) => {
        section.classList.remove('ativo');
      });
      const direcao = tabConteudo[index].dataset.anime;
      tabConteudo[index].classList.add('ativo', direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}