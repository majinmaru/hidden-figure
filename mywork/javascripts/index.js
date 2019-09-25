$(document).ready(function(){

	$('.worklist').eq(0).addClass('current');
	$('.worktab-btn').eq(0).addClass('current');
	$('#uxui-list .worklist-card-wrapper').slick({
	    centerMode: true,
	    infinite: true,
	    slidesToShow: 1,
	    variableWidth: true,
	    centerPadding: 0,
	    prevArrow: $('#uxui-list .worklist-arrow__btn.prev'),
	    nextArrow: $('#uxui-list .worklist-arrow__btn.next')
	});

	$('.worktab-btn').click(function(e){
		e.preventDefault();
		var currentIndex = $(this).index();
		var currentId = '#' + $(this).attr('id');
		$('.worktab-btn').eq(currentIndex).addClass('current');
		$('.worktab-btn').eq(currentIndex).siblings().removeClass('current');

		$('.worklist').eq(currentIndex).addClass('current');
		$('.worklist').eq(currentIndex).siblings().removeClass('current');
		/*
		if($(currentId + '-list').find('.worklist-card-wrapper').hasClass('slick-initialized')){
			return false;
		} else {
			$(currentId + '-list').find('.worklist-card-wrapper').slick({
				centerMode: true,
			    infinite: true,
			    slidesToShow: 1,
			    variableWidth: true,
			    centerPadding: 0,
			    prevArrow: $(currentId + '-list .worklist-arrow__btn.prev'),
			    nextArrow: $(currentId + '-list .worklist-arrow__btn.next')
			});
		}
		*/
		if($(currentId + '-list').find('.worklist-card-wrapper').not('slick-initialized')){
			if ($(currentId + '-list').is('#promotion-list')) {
				$(currentId + '-list').find('.worklist-card-wrapper').slick({
					centerMode: true,
					infinite: false,
				    slidesToShow: 1,
				    variableWidth: true,
				    centerPadding: 0,
				    prevArrow: $(currentId + '-list .worklist-arrow__btn.prev'),
				    nextArrow: $(currentId + '-list .worklist-arrow__btn.next')
				});
			} else {
				$(currentId + '-list').find('.worklist-card-wrapper').slick({
					centerMode: true,
				    infinite: true,
				    slidesToShow: 1,
				    variableWidth: true,
				    centerPadding: 0,
				    prevArrow: $(currentId + '-list .worklist-arrow__btn.prev'),
				    nextArrow: $(currentId + '-list .worklist-arrow__btn.next')
				});
			}
		} else {
			return false;
		}
	});

	$('.worklist-card').hover(function(){
		$('.card-detail__line').addClass('hover');
	}, function(){
		$('.card-detail__line').removeClass('hover');
	})
});