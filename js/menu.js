const ToggleButton =document.getElementsByClassName('toggle-button') [0] ;
const NavItems =document.getElementsByClassName('nav__items') [0] ;
console.log (ToggleButton) ;

ToggleButton.addEventListener('click' , () => {
    NavItems.classList.toggle('active')
})