$(document).ready(function(){
	$("html").niceScroll();

	AOS.init({
	   	duration: 1000
	});

	var stickyHeader = function() {
		var contentsTop = $(".contents").offset().top;
		var scrollTop = $(window).scrollTop();
		if(scrollTop > contentsTop){
			$(".btn-wrapper").addClass("sticky");
			//$(".container").css('margin-top', '-4.25rem');
		} else {
			$(".btn-wrapper").removeClass("sticky");
			//$(".container").css('margin-top', '-8.25rem');
		}
	}


	$(window).scroll(function() {
		stickyHeader();
	});
});