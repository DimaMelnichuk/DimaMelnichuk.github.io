$(function(){
 
	
	$('.popup').magnificPopup({
		
	})
	/***************** Menu-btn ********************/
	$(".menu__burger").click(function(event){
		$(".menu__burger,.menu").toggleClass("active");
	});
	   
	/***************** Header BG Scroll ******************/
	$(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 20) {
		$('.header').addClass('fixed');
		$('.header__inner').css({
			"height": "60px",
		});
		} else {
		$('.header').removeClass('fixed');
		$('.header__inner').css({
			"height": "80px",
		});
		}
	});
	});

;
	
});