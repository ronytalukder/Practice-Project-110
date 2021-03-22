// banner slider
$('.banner_sliser').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
});
// banner slider

// banner slider
$('.image_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});
// banner slider

// counter up part start
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// counter up part end

// course slider strat

$('.course_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    centerMode: true,
    centerPadding: "0",
});
// course slider end

// testimonial slider strat
$('.test_iages_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    centerMode: true,
    centerPadding: "0",
    asNavFor: '.test_text_slider',
});
// testimonial slider end

// testimonial text slider strat
$('.test_text_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.test_iages_slider',
});
// testimonial text slider end




// footer  slider start
$('.footer_slider_img').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
});
// footer  slider end
