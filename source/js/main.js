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