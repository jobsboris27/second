/* --------- plugins init --------- */

$(document).ready(function(){

	if ($('.call__row-select').length) {
		$('.call__row-select').simpleSelect();
	}
	if ($('.selectbox__dropdown').length) {
		$('.selectbox__dropdown').jScrollPane();
	}

    var slider = {
        items : $('.slider__wrapper_item'),
        container : $('.slider__wrapper'),
        list : $('.slider__wrapper_list'),
        nav : $('.slider__wrapper_nav'),
        activeSlide : $(this).items.filter('.active'),
        nextSlide : $(this).activeSlide.next(),
        prevSlide : $(this).activeSlide.prev(),
        firstSlide : $(this).items.first(),
        lastSlide : $(this).items.last(),
        sliderOffset : $(this).container.offset().left,
        pos : 0,

        init: function(){
            $(this).nav.click(function(e){
                e.preventDefault();
                if ($(this).nav.hasClass('next')) {
                    if(this.nextSlide.length){
                        $(this).positionSlide($(this).nextSlide);
                        $(this).addRemoveClass($(this).nextSlide);
                    }else{
                        $(this).positionSlide($(this).firstSlide);
                        $(this).addRemoveClass($(this).firstSlide);
                    }

                } else {
                    if($(this).prevSlide.length){
                        $(this).positionSlide($(this).prevSlide);
                        $(this).addRemoveClass($(this).prevSlide);
                    }else{
                        $(this).positionSlide($(this).lastSlide);
                        $(this).addRemoveClass($(this).lastSlide);
                    }

                }
                $(this).moveSlider();
            });
        },
        moveSlider: function(){
            $(this).list.css('left', '-=' +$(this).pos + 'px');
        },
        addRemoveClass: function(item){
            item.addClass('active').siblings().removeClass('active');
        },
        positionSlide: function(slide){
            $(this).pos = slide.offset().left - $(this).sliderOffset;
        }
    }
    slider.init();
}); // - > ready_end;
