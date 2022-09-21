
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

//click on heart to add favorite receptet

const receptCards = document.getElementById('#receptsCards');
const heartShape = document.getElementById('heart-shape');

receptsCards.addEventListener("click", function(e) {
	if (event.target.closest('#heart-shape')) {

		let cardClick = event.target.closest('#heart-shape');
		const root = document.querySelector(':root');

		cardClick.classList.toggle('heart-shape-click');
	};
})

//it is function of random shuffle Cards with recepts (it is from block 'recepts'
function getRandomInt() {
	if(document.getElementById('receptsCards')) {
		const receptCards = document.getElementById('receptsCards'); // find element UL with li-cards-recepst
		const countReceptCards = receptCards.getElementsByTagName('li'); // get NodeList with li-cards-recepst
		
		let cardArray = Array.from(countReceptCards); // convert NodeList into array


		//step-by-step add style of order for array elements with random value
		for (let item = 0; item < cardArray.length; item++) {
			let randomOrderCardOne = Math.floor(Math.random() * cardArray.length); //It`s generate random number from 0 to value of lenght

			cardArray[item].style.order = randomOrderCardOne; // for array[item] we  going to push style 'order' with random value
		}
	}
}

getRandomInt()