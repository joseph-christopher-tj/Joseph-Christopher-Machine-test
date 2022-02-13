$(window).on("scroll", function() {
    /**Fixed header**/
    if ($(window).scrollTop() > 200) {
        $(".trv-header").addClass("sticky");
        $("body").addClass("sticky-soomth");
    } else {
        $("header").removeClass("sticky");
        $("body").removeClass("sticky-soomth");
    }
});
$(document).ready(function() {
    // Header navbar close
    $(".trv-header__back-fade").click(function() {
        $(this).removeClass("active");
        $(".navbar-collapse").removeClass("show");
    });
    $(".trv-header__close").click(function() {
        $(".trv-header__back-fade").removeClass("active");
        $(".navbar-collapse").removeClass("show");
    });
    // Header navbar back fade
    $(".navbar-toggler").click(function() {
        $(".trv-header__back-fade").addClass("active");
        $(".navbar-collapse").addClass("show");
    });
});
// **********Productdetail zoom start**********
if ($(".trv-product-img-slider__item img").length > 0) {
    $(".trv-product-img-slider__item img").jqZoom({
        selectorWidth: 100,
        selectorHeight: 100,
        viewerWidth: 400,
        viewerHeight: 380,
    });
}
// **********Productdetail zoom end**********
// **********Product detailed slick & image hover start**********
if ($(".trv-product-img-slider__slider-for").length > 0) {
    $(".trv-product-img-slider__slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: false,
        asNavFor: ".trv-product-img-slider__slider-nav",
        draggable: false,
        touchMove: false,
        swipe: false
    });
    $(".trv-product-img-slider__slider-nav").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: ".trv-product-img-slider__slider-for",
        dots: false,
        infinite: false,
        focusOnSelect: true,
        draggable: true,
        touchMove: true,
        swipe: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 5,
                arrows: false
            },
        }, ],
    });
}