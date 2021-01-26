export default function initModal() {  
    
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

/// console.log(botaoAbrir, botaoFechar, containerModal);  // para testar se pegou os três no console do Crhome
    if( botaoAbrir && botaoFechar && containerModal ) {  /// somente se os três existirem no HTML, que irá ocorrer essa animação
        function toggleModal(event) {
            event.preventDefault();  /// para ele não sair da pagina, não ir para o login.html
            containerModal.classList.toggle('ativo');
        }
    
        function cliqueForaModal(event) {  /// esse aqui é para clicar fora do modal, ele está ativando a funcaoi pois o modal está dentro de uma div dentro da section, esse é para clicar na section
            if(event.target === this) {
                toggleModal(event);     /// se estiver clicando fora da div do modal, ele irá sair, se não, não irá sair
            }
        }
    
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}



