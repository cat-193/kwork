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

	const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-fade, .animate-slide-left, .animate-slide-right, .animate-scale');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animated');
				observer.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.01,
		rootMargin: '0px'
	});

	animateElements.forEach(element => {
		observer.observe(element);
	});
});