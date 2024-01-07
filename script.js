/* Navigation Bar */
document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger');
	const mobileNav = document.querySelector('.mobile-nav');
	const closeIcon = document.querySelector('.mobile-nav .close-icon');

	const toggleMobileMenu = () => mobileNav.classList.toggle('open');
	const closeMobileMenu = () => mobileNav.classList.remove('open');

	hamburger.addEventListener('click', toggleMobileMenu);
	closeIcon.addEventListener('click', closeMobileMenu);

	document.querySelectorAll('.mobile-nav a').forEach((link) => {
		link.addEventListener('click', closeMobileMenu);
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth >= 768 && mobileNav.classList.contains('open')) {
			mobileNav.classList.remove('open');
		}
	});
});

/* Form Functions */
document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('contactForm');
	form.onsubmit = (e) => {
		e.preventDefault();

		const formData = {
			firstName: form.elements['firstName'].value,
			lastName: form.elements['lastName'].value,
			email: form.elements['email'].value,
			confirmEmail: form.elements['confirmEmail'].value,
			question: form.elements['question'].value,
		};

		if (formData.email !== formData.confirmEmail) {
			alert('Email addresses do not match.');
			return;
		}

		alert('Message Sent Successfully!');
		form.reset();
	};
});
