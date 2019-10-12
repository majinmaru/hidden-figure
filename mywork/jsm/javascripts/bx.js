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

	$(".content-02__design").click(function(e){
		e.preventDefault();
		var dimmedHeight = $(".container").height();
		var dimmedWidth = $(".container").width();
		var imgHeight = $(".contents").offset().top;

		$(".content-07").show().addClass('pop');
		$(".content-07").css({
			"width": dimmedWidth, 
			"height": dimmedHeight,
			"background-color": 'rgba(63, 63, 63, 0.7)'
		})
		
		$('html, body').animate({
            scrollTop : imgHeight
        }, 1000);
        
		/*
		if($(".content-07").hasClass('pop')) {
			$(".content-07").hide().removeClass('pop');
		} else {
			$(".content-07").show().addClass('pop');
		}
		*/
	});
	$(".content-07").click(function(e){
		e.preventDefault();
		$(".content-07").hide().removeClass('pop');
	});
});