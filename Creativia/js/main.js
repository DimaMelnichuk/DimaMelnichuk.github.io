$(function(){

  /***************** Slider slick ******************/
   $('.clients-slider,.twitter-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000
  });

  $('.banner-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7000
  });

  /***************** Pop up******************/
  $('.popup').magnificPopup();

  /***************** Smooth Scrolling ******************/
  $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
  });

   /***************** Menu-btn ********************/

   $(".menu__burger").click(function(event){
     $(".menu__burger,.menu").toggleClass("active");
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
        $('.header').addClass('header_fixed');
      } else {
        $('.header').removeClass('header_fixed');
      }
    });
  });

});