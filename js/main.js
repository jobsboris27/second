$(document).ready(function(){
    var body = $('body');

    body.on('click', '.call__select_button', function(){
        alert();
    })

    $('.slider__wrapper_nav').click(function(e){
        e.preventDefault();

        var items = $('.slider__wrapper_item'),
            container = $('.slider__wrapper'),
            list = $('.slider__wrapper_list'),
            activeSlide = items.filter('.active'),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev(),
            firstSlide = items.first(),
            lastSlide = items.last(),
            sliderOffset = container.offset().left,
            pos = 0;

        if ($(this).hasClass('next')) {
            if(nextSlide.length){
                positionSlide(nextSlide);
                addRemoveClass(nextSlide);
            }else{
                positionSlide(firstSlide);
                addRemoveClass(firstSlide);
            }

        } else {
            if(prevSlide.length){
                positionSlide(prevSlide);
                addRemoveClass(prevSlide);
            }else{
                positionSlide(lastSlide);
                addRemoveClass(lastSlide);
            }

        }
        list.css('left', '-=' + pos + 'px');
        function addRemoveClass(item){
            item.addClass('active').siblings().removeClass('active');
        }
        function positionSlide(slide){
           pos = slide.offset().left - sliderOffset;
        }

    })
});