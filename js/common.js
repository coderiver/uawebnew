head.ready(function() {

	// form submit animation

	$('.js-submit').on('click', function(){
		$('.js-progress').animate({
			width: '100%'
		}, 2000);
	});

	
});