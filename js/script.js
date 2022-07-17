

    var splide = new Splide( '.splide',{
    type   : 'loop',
  	 padding: '5rem',
  	 arrows: boolean = false,
    } );
    
    splide.mount();


//burger-menu event

const burgerMenu = document.querySelector('#header__nav');
const burger = document.querySelector('#burger');

if (burger) {
	burger.addEventListener("click", function(e) {
		burgerMenu.classList.toggle('open');
	});
};
