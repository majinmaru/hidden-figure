$(document).ready(function(){
	$("html").niceScroll();

	// AOS
	var myAOS = function() {
		AOS.init({
		   duration: 1000
		});
	}

	myAOS();

	$(".content-02__design").click(function(e){
		e.preventDefault();
		var dimmedHeight = $(".container").height();
		var dimmedWidth = $(".container").width();

		$(".showimg").show().addClass('pop');
		$(".showimg").css({
			"width": dimmedWidth, 
			"height": dimmedHeight,
			"background-color": 'rgba(63, 63, 63, 0.7)'
		})
	});
	$(".showimg").click(function(e){
		e.preventDefault();
		$(".showimg").hide().removeClass('pop');
	});
});