$(document).ready(function(){	
	$('.open-menu').click(function(event) {
		$('body').toggleClass('show-menu');
	});	
	$('.close-menu,.header-menu ul li a').click(function(event) {
		$('body').removeClass('show-menu');
	});	
	if($('.banner-slider').length > 0) {
		$('.banner-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			speed: 3000,
			dots: false,
			prevArrow:`<div class='slick-prev'><svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.929364 12.0159L16.2628 23.1025L11.8485 11.9999L16.2628 0.898033L0.929364 11.9847L0.951444 11.9999L0.929364 12.0159Z" fill="white"/>
			</svg></div>"`,
			nextArrow:`<div class='slick-next'><svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16.0706 11.9841L0.737244 0.897461L5.1515 12.0001L0.737244 23.102L16.0706 12.0153L16.0486 12.0001L16.0706 11.9841Z" fill="white"/>
			</svg></div>`,
			
		});
	}
	if($('.feature-slider').length > 0) {
		$('.feature-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			speed: 1000,
			dots: false,
			prevArrow:`<div class='slick-prev'><svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.929364 12.0159L16.2628 23.1025L11.8485 11.9999L16.2628 0.898033L0.929364 11.9847L0.951444 11.9999L0.929364 12.0159Z" fill="white"/>
			</svg></div>"`,
			nextArrow:`<div class='slick-next'><svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16.0706 11.9841L0.737244 0.897461L5.1515 12.0001L0.737244 23.102L16.0706 12.0153L16.0486 12.0001L16.0706 11.9841Z" fill="white"/>
			</svg></div>`,
			responsive: [
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 575,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
			
		});
	}

	if($('.lifestyle-slider').length > 0) {
		$('.lifestyle-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			speed: 1000,
			dots: false,
			prevArrow:`<div class='slick-prev'><svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.929364 12.0159L16.2628 23.1025L11.8485 11.9999L16.2628 0.898033L0.929364 11.9847L0.951444 11.9999L0.929364 12.0159Z" fill="white"/>
			</svg></div>"`,
			nextArrow:`<div class='slick-next'><svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16.0706 11.9841L0.737244 0.897461L5.1515 12.0001L0.737244 23.102L16.0706 12.0153L16.0486 12.0001L16.0706 11.9841Z" fill="white"/>
			</svg></div>`,
			responsive: [
				{
				  breakpoint: 575,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
			
		});
	}
	
	if($('.recipes-filter-wrapper').length > 0) {
		$(".recipes-single-filter-title a").on("click", function(e){
			e.preventDefault();
			if($(this).parent().hasClass("active"))
			{
				$(this).parent().removeClass("active");
				$(this).parent().parent().find(".recipes-single-filter-list").slideUp();
			}
			else
			{
				$(this).parent().addClass("active");
				$(this).parent().parent().find(".recipes-single-filter-list").slideDown();
			}
		});
	}
    var showChar = 132; 
    var ellipsestext = "...";
    var moretext = "Read More >>";
    var lesstext = "Read Less >>";  
	if($('.more').length > 0){  
		$('.more').each(function() {
			var content = $(this).html(); 
			if(content.length > showChar) { 
				var c = content.substr(0, showChar);
				var h = content.substr(showChar, content.length - showChar); 
				var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
				$(this).html(html);
			} 
		}); 
		$(".morelink").click(function(){
			if($(this).hasClass("less")) {
				$(this).removeClass("less");
				$(this).html(moretext);
			} else {
				$(this).addClass("less");
				$(this).html(lesstext);
			}
			$(this).parent().prev().toggle();
			$(this).prev().toggle();
			return false;
		});
	}
	if($('.faq-accordion').length > 0){
		$('.faq-accordion .item').click(function(){
			$(this).toggleClass(' active ');
			$(this).siblings().removeClass(' active '); 
			$('.faq-answer').stop().slideUp();
			$('.active .faq-answer').stop().slideDown();
			return false;
		});
	}
});

$(window).on('resize', function() {
	if($('.bannner-slider').length > 0) {
		$('.bannner-slider').slick('resize');
	}
	if($('.product-slider').length > 0) {
		$('.product-slider').slick('resize');
	}
	if($('.category-list').length > 0) {
		$('.category-list').slick('resize');
	}
	if($('.our-clients-slider').length > 0) {
		$('.our-clients-slider').slick('resize');
	}
	if($('.instgram-slider').length > 0) {
		$('.instgram-slider').slick('resize');
	}
});