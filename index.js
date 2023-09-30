const hamburger_btn = document.getElementById('hb');
const close_btn = document.getElementById('hb-close');
const menu = document.getElementById('hamburger-menu');

const show = () => { menu.style.display = 'flex' };
const hide = () => { menu.style.display = 'none' };

hamburger_btn.addEventListener('click', show);
close_btn.addEventListener('click', hide);

const menu_buttons = document.getElementsByClassName('hb-menu-btn');

for(var i = 0; i < menu_buttons.length; i++) {
    menu_buttons.item(i).addEventListener('click', hide);
}

