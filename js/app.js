$(document).ready(function() {
	$('.burger').click(function(){
		$(this).toggleClass('active');
		$('.mobile .menu').toggleClass('active');
		$('body, html').toggleClass('lock');
	});

	$(".nav a").mPageScroll2id();

	$(".scroll-down a").click(function(){
		$("html, body").animate({scrollTop: $("header").height()},"slow");

		return false;
	});

	$(".mobile-nav .anchor a").click(function() {
		$('.mobile .menu').removeClass('active');
		$('body, html').removeClass('lock');
		$('.burger').removeClass('active');
	});

	$(".header-intro").slick({
		dots:true,
		fade:true
	});

	// открыть по кнопке
	$('#register, #register-mobile').click(function() { 
		
		$('.js-overlay-campaign').fadeIn();
		$('.js-overlay-campaign').addClass('disabled');
	});

	// закрыть на крестик
	$('.js-close-campaign').click(function() { 
		$('.js-overlay-campaign').fadeOut();
		
	});

	// закрыть по клику вне окна
	$(document).mouseup(function (e) { 
		var popup = $('.js-popup-campaign');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-campaign').fadeOut();
			
		}
	});
})