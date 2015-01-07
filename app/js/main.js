/* --------- plugins init --------- */

$(document).ready(function(){

    if ($('.call__row-select').length) {
        $('.call__row-select').simpleSelect();
    }
    if ($('.selectbox__dropdown').length) {
        $('.selectbox__dropdown').jScrollPane();
    }

    var slider = {
        items: $('.slider__wrapper_item'),
        container: $('.slider__wrapper'),
        list: $('.slider__wrapper_list'),
        nav: $('.slider__wrapper_nav'),
        pos: 0,

        init: function() {

            this.activeSlide = this.items.filter('.active');
            this.nextSlide = this.activeSlide.next();
            this.prevSlide = this.activeSlide.prev();
            this.firstSlide = this.items.first();
            this.lastSlide = this.items.last();
            this.sliderOffset = this.container.offset().left;

            this.nav.click(function(e) {
                e.preventDefault();

                if (this.classList.contains('next')) {
                    if (slider.nextSlide.length) {
                        slider.positionSlide(slider.nextSlide);
                        slider.addRemoveClass(slider.nextSlide);
                    } else {
                        slider.positionSlide(slider.firstSlide);
                        slider.addRemoveClass(slider.firstSlide);
                    }

                } else {
                    if (slider.prevSlide.length) {
                        slider.positionSlide(slider.prevSlide);
                        slider.addRemoveClass(slider.prevSlide);
                    } else {
                        slider.positionSlide(slider.lastSlide);
                        slider.addRemoveClass(slider.lastSlide);
                    }

                }
                slider.moveSlider();
            });
        },
        moveSlider: function() {
            slider.list.css('left', '-=' + slider.pos + 'px');
        },
        addRemoveClass: function(item) {
            item.addClass('active').siblings().removeClass('active');
        },
        positionSlide: function(slide) {
            slider.pos = slide.offset().left - slider.sliderOffset;
        }
    }
    slider.init();
}); // - > ready_end;
