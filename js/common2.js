head.ready(function() {

	//var slickTimer = 5000;
	$('.js-slick').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows:false,
	  speed: 300,
	  adaptiveHeight: true,
	  autoplaySpeed: 5000
	});
	$('.js-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
	});

});