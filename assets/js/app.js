document.addEventListener('DOMContentLoaded', function () {
	const burgerElement = document.querySelector('.burger-menu');
	const navElement = document.querySelector('.header__nav');

	burgerElement.addEventListener('click', function () {
		this.classList.toggle('open');
		navElement.classList.toggle('open');
	});

	const mobileLinks = document.querySelectorAll('.header__nav-link');
	mobileLinks.forEach(link => {
		link.addEventListener('click', function () {
			burgerElement.classList.remove('open');
			navElement.classList.remove('open');
		});
	});
});