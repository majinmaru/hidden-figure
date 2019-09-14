$(document).ready(function(){
	/*
	$('#uxui .worklist-card-wrapper').slick({
	    centerMode: true,
	    infinite: true,
	    slidesToShow: 1,
	    variableWidth: true,
	    centerPadding: 0,
	    prevArrow: $('#uxui .worklist-arrow__btn.prev'),
	    nextArrow: $('#uxui .worklist-arrow__btn.next')
	});

	$('#promotion .worklist-card-wrapper').slick({
	    centerMode: true,
	    infinite: false,
	    slidesToShow: 1,
	    variableWidth: true,
	    centerPadding: 0,
	    prevArrow: $('#promotion .worklist-arrow__btn.prev'),
	    nextArrow: $('#promotion .worklist-arrow__btn.next')
	});
	$('#graphic .worklist-card-wrapper').slick({
	    centerMode: true,
	    infinite: true,
	    slidesToShow: 1,
	    variableWidth: true,
	    centerPadding: 0,
	    prevArrow: $('#graphic .worklist-arrow__btn.prev'),
	    nextArrow: $('#graphic .worklist-arrow__btn.next')
	});
*/

	$('.worklist').eq(0).addClass('current');
	$('.worktab-btn').eq(0).addClass('current');
	$('.worklist').eq(0).find('.worklist-card-wrapper').slick({
	    centerMode: true,
	    infinite: true,
	    slidesToShow: 1,
	    variableWidth: true,
	    centerPadding: 0,
	    prevArrow: $('.worklist-arrow__btn.prev'),
	    nextArrow: $('.worklist-arrow__btn.next')
	});

	$('.worktab-btn').click(function(e){
		e.preventDefault();
		var currentIndex = $(this).index();
		var currentId = '#' + $(this).attr('id');
		console.log(currentId);
		$('.worktab-btn').eq(currentIndex).addClass('current');
		$('.worktab-btn').eq(currentIndex).siblings().removeClass('current');

		$('.worklist').eq(currentIndex).addClass('current');
		$('.worklist').eq(currentIndex).siblings().removeClass('current');
		$(currentId + '-list').find('.worklist-card-wrapper').slick({
			centerMode: true,
		    infinite: true,
		    slidesToShow: 1,
		    variableWidth: true,
		    centerPadding: 0,
		    prevArrow: $(currentId + '-list .worklist-arrow__btn.prev'),
		    nextArrow: $(currentId + '-list .worklist-arrow__btn.next')
		})
		/*
		$('.worklist').eq(currentIndex).find('.worklist-card-wrapper').slick({
		    centerMode: true,
		    infinite: true,
		    slidesToShow: 1,
		    variableWidth: true,
		    centerPadding: 0,
		    prevArrow: $('.worklist-arrow__btn.prev'),
		    nextArrow: $('.worklist-arrow__btn.next')
		});
		$('.worklist').eq(currentIndex).siblings().find('.worklist-card-wrapper').slick('unslick');
		*/
	})
});