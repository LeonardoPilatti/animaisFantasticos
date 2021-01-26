export default function initTooltip() {  
    const tooltips = document.querySelectorAll('[data-tooltip]');

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);  // nesse this, estou fazendo referência ao item do tooltips.foreach
        tooltipBox.style.top = event.pageY + 'px';  // o valor que ele me dá é um number, aí preciso da string 'px' pixel para ele somar
        tooltipBox.style.left = event.pageX + 'px';
    
        onMouseMove.tooltipBox = tooltipBox;  // aqui estou criando a propriedade tooltibox dentro do objeto onMouseMove
        this.addEventListener('mousemove', onMouseMove);   /// quando eu mecher o mouse no mapa, o tooltip irá seguir o mouse
    
        onMouseLeave.tooltipBox = tooltipBox; // aqui estou dizendo que o objeto onMouseLeave.tooltipBox é igual a constante tooltipbox
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);  /// aqui ele irá ativar a função do mouse para quando tirar o mouse de cima do mapa 
    }
    
    const onMouseLeave = {
       // tooltipBox: '',  // não preciso ter elas aqui, o tooltibox e o element, pois no onMouseOver já estou criando elas no
       // element: '',     // onMouseLeave.element = this; e no onMouseLeave.tooltipBox = tooltipBox; 
        handleEvent() {  /// tem que ter esse nome dentro do objeto para funcionar, se não fica só duplicando o tooltip
            this.tooltipBox.remove();  /// nesse this, estou falando com o tooltibox dentro desse objeto
            this.element.removeEventListener('mouseleave', onMouseLeave);  // aqui ele irá remover o evento após ocorrer
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }
    
    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';  // mais 20px que é para o tooltip não ficar piscando;
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }
    
    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');       /// aqui estou criando uma div;
        const text = element.getAttribute('aria-label');        /// aqui estou selecionando o aria-label no html;
        tooltipBox.classList.add('tooltip');                    /// aqui estou adicionando a classe tooltip na div;
        tooltipBox.innerText = text;                            /// aqui estou dizendo que o tooltipbox será do tipo texto;
        document.body.appendChild(tooltipBox);                   /// aqui estou adicionando ao final do body do html o tooltipbox;
        return tooltipBox;
    }
    
    
    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);   /// o evento 'mouseover' é ativado quando passa o mouse por cima dele.
    })
    
    /// o toolTip é quando passa o mouse por cima de algo e abre uma janela mostrando um texto, uma imagem e tal
}