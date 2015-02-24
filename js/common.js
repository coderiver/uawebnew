head.ready(function() {

	// form submit animation

	$('.js-submit').on('click', function(){
		$('.js-progress').animate({
			width: '100%'
		}, 2000);
	});

// main page slider

	// slider init
	$('.js-slider').slick({
	  fade: true,
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

});