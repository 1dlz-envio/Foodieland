
//init splide slider
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

//show or hide block Category

const	categoryButton = document.querySelector('#foodCategory__toggleCaterory');
const categoryWrapper = document.querySelector('#foodCategory__wrapper');
let countCardsCategory = document.querySelector('#foodCategory__foodCards');

let wConteiner = categoryWrapper.clientWidth;
let wCountCardsCategory =  countCardsCategory.children.length * 180;


if ((wCountCardsCategory / wConteiner) <= 0.625) {
	categoryButton.classList.toggle('buttonCategoryOff');
	countCardsCategory.classList.toggle('spaceAround');
} else {
	categoryButton.addEventListener("click", function(e) {
		categoryWrapper.classList.toggle('category__action');
			//change text inside button show/hide Category
			let textButton = categoryButton.innerHTML;

			if (textButton === "View All Categories") {
				categoryButton.innerHTML = "Hide Categories";
			} else {
				categoryButton.innerHTML = "View All Categories";
			};
	});
};
