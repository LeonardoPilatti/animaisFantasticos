import outsideClick from './outsideClick.js' 

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];
    
    if(menuButton) {
        function openMenu(event) {
            menuList.classList.add('ativo');
            menuButton.classList.add('ativo');
            outsideClick(menuList, eventos, () => {
                menuList.classList.toggle('ativo');
                menuButton.classList.toggle('ativo');  
            })
        }
        
        eventos.forEach((evento) => {
            menuButton.addEventListener(evento, openMenu);
        })
    }
}
