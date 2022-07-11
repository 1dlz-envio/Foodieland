const swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		//boolets
		clickable: true,
		dynamicBullets: true,
	},
	//eternal slides
	loop: true,
	//space between slides
	spaceBetween: 35,
	//slide in center of screen
	centeredSlides: true,
});