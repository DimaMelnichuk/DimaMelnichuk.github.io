	const body = document.querySelector('body');
	const toggle = document.getElementById('toggle');
	const input = document.getElementById('switch');

	toggle.addEventListener('click', function() {
		const isChecked = input.checked;
		if (isChecked) {
			body.classList.remove('night');
		} else {
			body.classList.add('night');
		}
	});

	const scrollUp = document.querySelector('.scroll-up');
	const offset = 800;
	const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

	// onScroll
	window.addEventListener('scroll', () => {
		if (getTop() > offset) {
			scrollUp.classList.add('scroll-up--active');
		} else {
			scrollUp.classList.remove('scroll-up--active');
		}
	});

	//click
	scrollUp.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});