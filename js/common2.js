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
	$('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var	dot = $(this).find(".slick-dots li"),
			n = dot.length;
		for(i=0;i<=n;i++) {
			if (dot.eq(i).hasClass("slick-active")) {
				break;
			}
			else {
				dot.eq(i).addClass("is-active");
			}
		}

	});

});