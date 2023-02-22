const menuBtn = document.querySelector('.mobile-button');
const menuMobile = document.querySelector('.top-header--mobile');
const contacts = document.querySelector('.contacts--mobile');

menuBtn.addEventListener('click', ()=> {
    contacts.classList.toggle('contacts--open');
})

menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('top-header--open');
})

