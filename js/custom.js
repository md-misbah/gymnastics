$(function () {
	//varable declare;
	var backtop = $('.backtoTop');

	//navbar active on mouseover;

	$('.navbar .nav-item').on('mouseover', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});


	// fixed navbar;
	$(window).scroll(function () {
		var navscroll = $(this).scrollTop();
		var backtoTop = $(this).scrollTop();
		if (navscroll > 400) {
			$('.navbar').addClass('fixed-nav');
		} else {
			$('.navbar').removeClass('fixed-nav');

		}

		// backtoTop;
		if (backtoTop > 500) {
			backtop.fadeIn();
		} else {
			backtop.fadeOut();
		}
	});


	// backtoTop body-0 ;
	backtop.click(function () {
		$('html,body').animate({
			scrollTop: 0,
		}, 1000);
	});


	// banner slaider;
	$('.banner-slider').slick({
		arrows: false,
		dots: true,
		autoplay: false,
		autoplaySpeed: 3000,
	});


	// about video;
	$('.venobox').venobox({
		spinner: 'cube-grid',
		spinColor: ' var(--bclr)',
		closeBackground: 'var(--bclr)',
		overlayColor: 'var(--over8)',
		autoplay: true,
	});


	// testimonial slider;
	$('.test-slid').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
    		},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					autoPlay: false,
				}
			},
		]
	});


	// counter up;
	$('.counter').counterUp({
		time: 1500,
		delay: 20,
	});


	// marker-slider;
	$('.market-slaider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		prevArrow: '<i class="slick-prev fas fa-chevron-left"></i>',
		nextArrow: '<i class="slick-next fas fa-chevron-right"></i>',
		centerMode: true,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
    		},
			
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					prevArrow: false,
					nextArrow:false,
				}
			},
		]
	});


	// animate__animated;

	new WOW().init();

	//animation body scroll ;
	var html_body = $('html, body');
	$('.navbar .navbar-nav .nav-item a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 0
				}, 1000);
				return false;
			}
		}
	});




});