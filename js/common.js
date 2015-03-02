head.ready(function() {

	$(document).on("click", function () {
		$(".js-nav-toggle").removeClass("is-active");
		$(".js-nav").removeClass("is-visible");
		$("html").removeClass("has-open-nav");
	});

	// form submit animation

	$('.js-submit').on('click', function(){
		$('.js-progress').animate({
			width: '100%'
		}, 2000);
	});

// main page slider

	// slider init
	$('.js-slider').slick({
	  fade: false,
	  easing: 'easeInCubic',
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows:false,
	  speed: 300,
	  adaptiveHeight: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  responsive: [
	      {
	        breakpoint: 1024,
	        settings: {
	          dots: true
	        }
	      }
	    ]
	});

	// counter	
	var timer = null;

	function counter(){
		timer = setInterval(function(){
			$('.m-news__progress li.is-active').next().addClass('is-active');
		}, 500);
	};
	counter();

	$('.js-slider').on('beforeChange', function(slick, currentSlide){
		clearInterval(timer);
	});

	$('.js-slider').on('afterChange', function(slick, currentSlide){

		var index = $('.js-slider').slick('slickCurrentSlide');
		$('.m-news__progress li').removeClass('is-active');
		$('.m-news__progress li:nth-child(1)').addClass('is-active');
		$('.m-news').removeClass('is-active');
		$('.m-news[data-index='+index+']').addClass('is-active');
		counter();

	});

	//var slickTimer = 5000;
	$('.js-slick').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows:false,
	  speed: 300,
	  adaptiveHeight: true,
	  autoplaySpeed: 5000,
	  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
	]
	});
	$('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var	dot = $(this).find(".slick-dots li"),
			n = dot.length;
		dot.removeClass("is-active");
		for(i=0;i<=n;i++) {
			if (dot.eq(i).hasClass("slick-active")) {
				break;
			}
			else {
				dot.eq(i).addClass("is-active");
			}
		}

	});


	//var slickTimer = 5000;
	var calendarSlider =  $('.js-calendar-slider');
	calendarSlider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows:false,
	  speed: 300,
	  adaptiveHeight: true,
	  autoplaySpeed: 0
	});
	$(".js-month-prev").on("click", function () {
		$('.js-calendar-slider').slick('slickPrev');
	});
	$(".js-month-next").on("click", function () {
		$('.js-calendar-slider').slick('slickNext');
	});
	calendarSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		var activeMonth = $(this).find(".slick-active").attr("data-month");
		$(".js-month").text(activeMonth);
	});

	$(".js-nav-toggle").on("click", function (event) {
		$(this).toggleClass("is-active");
		$(".js-nav").toggleClass("is-visible");
		$("html").toggleClass("has-open-nav");
		event.stopPropagation();
	});
	$(".js-nav").on("click", function (event) {
		event.stopPropagation();
	});

	//var slickTimer = 5000;
	$('.js-direction-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  dots: false,
	  arrows:false,
	  speed: 300,
	  autoplaySpeed: 0,
	  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
	]

	});

});