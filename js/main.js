$(function(){

	/***************** Popup ********************/
	$('.popup__link').magnificPopup({
	});
	/***************** Menu-btn ********************/
	$(".menu__burger").click(function(event){
		$(".menu__burger,.menu").toggleClass("active");
		$("body").toggleClass("active");
	});
	
	/***************** Header BG Scroll ******************/
	$(function() {
		$(window).scroll(function() {
		  var scroll = $(window).scrollTop();
	
		  if (scroll >= 20) {
			$('.header').addClass('header--fixed');
			$('.header__inner').css({
			  "height": "60px",
			});
		  } else {
			$('.header').removeClass('header--fixed');
			$('.header__inner').css({
			  "height": "80px",
			});
		  }
		});
	  });
	  
	new WOW().init();


});