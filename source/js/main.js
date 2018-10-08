//  Slick слайдер для страниц Номера и цены
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',


});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
});
// Slick слайдер для страницы История

$('.history_slider_old').slick({
    dots: true,
    arrows: false
});
// Slick слайдер для страницы Spa

$('.slider_for_spa').slick({
    dots: true,
    arrows: true
});

//   Переключение активного элемента на странице лечение

$(function () {
    $(".helath_item_detail").on("click", function () {
        var idx = $(this).index();
        console.log(idx);
        $(".box_health_desc").addClass('box_health_desc_hide');
        $(".box_health_desc").eq(idx).removeClass('box_health_desc_hide');
    });
});

$(function () {
    $(".helath_item_detail").click(function () {
        $(".helath_item_detail").removeClass("active_health");
        $(this).toggleClass("active_health");
    })
});

//  Burger для мобильный устройств
$(document).ready(function(){
    $(".burger").click(function(){
        $(".overlay-main").fadeToggle(200);
        // $('.logo').fadeToggle(200);
        $('.header__nav').fadeToggle(200);
    });
});
$('.overlay-main').on('click', function(){
    $(".overlay-main").fadeToggle(200);
     $('.header__nav').fadeToggle(200);
});
