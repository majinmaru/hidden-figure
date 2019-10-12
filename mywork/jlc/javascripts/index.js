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


	$(window).scroll(function() {
		stickyHeader();
	});
});