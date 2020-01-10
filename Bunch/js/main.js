$(function(){
   /***************** Menu-btn ********************/
   $(".menu__burger").click(function(event){
    $(".menu__burger,.header-menu").toggleClass("active");
  	});

  /***************** Accordion ******************/
   $(".title_block").click(function(event){
      if($(".title_block").hasClass("active_block")){
        $(".title_block").not($(this)).removeClass("active_block");
        $(".info").not($(this).next()).slideUp(300);
      }
      $(this).toggleClass("active_block").next().slideToggle(300);
   });
   
	/***************** Header BG Scroll ******************/
	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"padding": "20px 0",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"padding": "30px 0",
				});
			}
		});
	});

	/***************** Phone mask ******************/
	$(function() {
		$("#phone").mask("+380(99) 9999999");
		$("#number").mask("10");
	});

});