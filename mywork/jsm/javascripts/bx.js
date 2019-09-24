$(document).ready(function(){
	$("html").niceScroll();

	var stickyHeader = function() {
		var contentsTop = $(".contents").offset().top;
		var scrollTop = $(window).scrollTop();
		if(scrollTop > contentsTop){
			$(".btn-wrapper").addClass("sticky");
		} else {
			$(".btn-wrapper").removeClass("sticky");
		}
	}
/*
	$(".filter-wrapper").slick({
		dots: false,
		autoplay: true,
		infinite: true,
		arrows: false,
		autoplaySpeed: 2000,
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    centerMode: true,
  		variableWidth: true,
  		adaptiveHeight: true,
  		easing: "ease",
  		cssEase: "ease",
  		pauseOnFocus: false,
  		pauseOnHover: false,
  		swipe: false
	});
*/

	$(window).scroll(function() {
		stickyHeader();
	});
});