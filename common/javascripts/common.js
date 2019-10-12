$(document).ready(function(){
	
	var topbtnAppear = function() {
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();

		if(scrollTop > windowHeight){
			$(".topbtn").addClass("appear");
		} else {
			$(".topbtn").removeClass("appear");
		}
	}

	$(".topbtn").click(function(e){
		e.preventDefault();
		//$(window).scrollTop(0);
		$('html, body').animate({
            scrollTop : 0
        }, 1000);
	})

	$(window).scroll(function() {
		topbtnAppear();
	});
});