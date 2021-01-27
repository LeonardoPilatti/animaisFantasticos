/// aqui para baixo é para fazer as animações de scroll, de quando passar o texto sumir e quando chegar no texto, ele aparecer
export default function initAnimacaoScroll() {

  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
  const windowMetade = window.innerHeight * 0.6;  /// esse é para pegar 60% da tela do usuário

  function animaScroll() {
      sections.forEach((sectionItem) => {
          const sectionTop = sectionItem.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible) {
              sectionItem.classList.add('ativo');
          } else if(sectionItem.classList.contains('ativo')) {  /// aqui estou verificando se a section já tem a classe de ativo, se tiver, irá remover, se não tiver, não irá fazer nada 
              sectionItem.classList.remove('ativo');
          }
      })
  // console.log('sim');  // para testar se está funcionando
  }

  animaScroll();

  window.addEventListener('scroll' , animaScroll);  /// tenho que falar com o window, pois o scroll é do window
  }
}
