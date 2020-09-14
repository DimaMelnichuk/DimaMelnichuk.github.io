	const body = document.querySelector('body');
	const toggle = document.getElementById('toggle');
	const input = document.getElementById('switch');

	toggle.addEventListener('click', function() {
		const isChecked = input.checked;
		if (isChecked) {
			body.classList.remove('night');
			toggle.classList.remove('active');
		} else {
			body.classList.add('night');
			toggle.classList.add('active');
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