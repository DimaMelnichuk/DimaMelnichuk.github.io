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
const animItems = document.querySelectorAll('.animation');

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset =  offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			}else {
				if (!animItem.classList.contains('animation-no')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300); // delay js

	/* animOnScroll(); */ // delay css
}