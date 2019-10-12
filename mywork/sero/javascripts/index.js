$(document).ready(function(){
	$("html").niceScroll();

	$(".content-02__design").click(function(e){
		e.preventDefault();
		var dimmedHeight = $(".container").height();
		var dimmedWidth = $(".container").width();
		var imgHeight = $(".contents").offset().top;

		$(".showimg").show().addClass('pop');
		$(".showimg").css({
			"width": dimmedWidth, 
			"height": dimmedHeight,
			"background-color": 'rgba(63, 63, 63, 0.7)'
		})

		$('html, body').animate({
            scrollTop : imgHeight
        }, 1000);
	});
	$(".showimg").click(function(e){
		e.preventDefault();
		$(".showimg").hide().removeClass('pop');
	});
});