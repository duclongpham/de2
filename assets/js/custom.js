$(document).ready(function() {
    $('.slider__list').slick({
        nextArrow: $('.slider__next'),
        prevArrow: $('.slider__prev')
    });
    $('.top-selling__list').slick({
        nextArrow: $('.top-selling__title--next'),
        prevArrow: $('.top-selling__title--prev'),
    });

    $('.menu__right--icon').on('click', function() {
        $('.menu__right').css({ display: 'block' });

    })
    $('.menu__right--bg').on('click', function() {
        $('.menu__right').removeAttr('style');
    });
})