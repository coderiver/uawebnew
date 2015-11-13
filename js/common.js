head.ready(function() {

	$('.js-dates li').click(function(event) {
		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');
		eventstoshow = $(this).children('a').data('show');
		ShowEvents(toshow);
		return false;
	});

	$('.js-drop-select-events').change(function(event) {
		newtext = $(this).find("option:selected").text();
		$(this).parent().find('.js-drop-text').text(newtext);
		ShowEvents($(this).val());
	});

	function ShowEvents(type){
		$('.event').hide()
		$('.calendar__body li').removeClass('is-active');
		if(type=='all'){
			events = $('.event');
		}
		else{
			events = $('.event_'+type);
		}
		events.show();
		events.each(function(index, el) {
			$('#d'+$(this).data('date')).addClass('is-active');
		});
		
	}


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

	var viewportWidth = verge.viewportW();
	var viewportHeight = verge.viewportH();
// main page slider

	// slider init
	$('.js-slider').slick({
	  fade: false,
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
	  arrows:true,
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
	$(window).resize(function(){
		initSlickMobile();
	});
	function initSlickMobile () {
		var viewportWidth = verge.viewportW();
		if (viewportWidth <= 960) {
			$('.js-slick-logo').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  dots: true,
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
		}
		else {
			$('.js-slick-logo').slick('unslick');
		}
	}
	initSlickMobile();

	$('.js-slick-4').slick({
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
	$('.js-slick-3').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows:false,
		speed: 300,
		autoplaySpeed: 0,
		adaptiveHeight: true,
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
	$('.js-slick-review').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		speed: 300,
		autoplaySpeed: 0,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
	        	}
			}
		]

	});

// event slider
	$('.js-event-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: '.event__item',
		arrows: true,
		speed: 300,
		fade: true,
		cssEase: 'linear'
	});
	$(".js-month-prev").on("click", function () {
		$('.js-event-slider').slick('slickPrev');
	});
	$(".js-month-next").on("click", function () {
		$('.js-event-slider').slick('slickNext');
	});

	$('.js-slick-review').on('afterChange', function(event, slick, currentSlide, nextSlide){
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
	$(".article dt").on("click", function() {
		$(this).parents("dl").toggleClass("is-open").find("dd").slideToggle(200);
	});
	$(".js-drop-select").on("change", function() {
		var val = $(this).val();
		$(this).parents(".js-drop").find(".js-drop-text").text(val);
	});

	function scrollTopper() {
		var height = $(".header").outerHeight();
		if ($(document).scrollTop() >= height) {
			$(".topper").addClass("has-bg");
		}
		else {
			$(".topper").removeClass("has-bg");
		}
	}
	scrollTopper();
	$(window).scroll(function () {
		scrollTopper();
	});
	$(window).resize(function () {
		scrollTopper();
		if ($(window).width() <=768) {
			smallPlaceholder();
		}
	});

	function smallPlaceholder() {
		var input = $(".js-subscribe input"),
			placeholder = input.attr("data-placeholder");
		input.attr("placeholder", placeholder);
	}
	if ($(window).width() <=768) {
		smallPlaceholder();
	}

	//Disable overlay helper
	$(".js-fancybox-video").fancybox({
		padding: 0,
		fitToView: true,
		autoSize: true,
		openEffect	: 'none',
		closeEffect	: 'none',
		autoResize: true,
		aspectRatio: true,
	    helpers: {
		    overlay: {
		      locked: false
		    }
		}
	});


	//var slickTimer = 5000;
	$('.js-simple-slick').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: true,
	  speed: 300,
	  adaptiveHeight: true,
	  autoplaySpeed: 5000,
	  autoplay: true,
	  responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
	        	}
			}
		]
	});
	$('.js-simple-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
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


//tabs
$('ul.tabs__caption').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('is-active').siblings().removeClass('is-active')
          .closest('div.tabs').find('div.tabs__content').removeClass('is-active').eq(i).addClass('is-active');
      });
    });
});

$('#tabs__content2').change(function() {
	var id=this.value;
	$("tabs__content").removeClass('is-active');
	$("#cn_"+id).addClass('is-active').siblings().removeClass('is-active');
});










});