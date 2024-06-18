$(document).ready(function(){
$('.my-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
arrows: false,
dots: false,
speed: 300,
infinite: true,
autoplaySpeed: 5000,
autoplay: true,
responsive: [
{
breakpoint: 991,
settings: {
slidesToShow: 3,
}
},
{
breakpoint: 767,
settings: {
slidesToShow: 1,
}
},
{
breakpoint: 641,
settings: {
arrows: true,
slidesToShow: 1,
}
}
]
});

$('.customer-logos').slick({
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1500,
arrows: false,
dots: false,
pauseOnHover: false,
responsive: [{
breakpoint: 768,
settings: {
slidesToShow: 4
}
}, {
breakpoint: 767,
settings: {
slidesToShow: 2,
}
},
{
breakpoint: 641,
settings: {
arrows: true,
slidesToShow: 1,
}
}
]
});

$('.publicationImg').slick({
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1500,
arrows: false,
dots: false,
pauseOnHover: false,
responsive: [{
breakpoint: 768,
settings: {
slidesToShow: 4
}
}, {
breakpoint: 767,
settings: {
slidesToShow: 2
}
},
{
breakpoint: 641,
settings: {
arrows: true,
slidesToShow: 1,
}
}]
});

$('.ourpremium-logos').slick({
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1500,
arrows: false,
dots: false,
pauseOnHover: false,
responsive: [{
breakpoint: 768,
settings: {
slidesToShow: 4
}
}, {
breakpoint: 520,
settings: {
slidesToShow: 2
}
},{
breakpoint: 641,
settings: {
arrows: true,
slidesToShow: 1,
}
}
]
});
});

// tenant page our process
$(document).ready(function(){
$('.our_process .media').click(function(){
    $(".media").removeClass("active");
     $(this).addClass("active");
});
});

$(document).ready(function(){
    $('.div1 .media').click(function(){
        $('.ellipse_div img').css({
            "-webkit-transform": "rotate(0deg)",
            "-moz-transform": "rotate(0deg)",
            "transform": "rotate(0deg)" /* For modern browsers(CSS3)  */
        });
    });
    $('.div2 .media').click(function(){
        $('.ellipse_div img').css({
            "-webkit-transform": "rotate(90deg)",
            "-moz-transform": "rotate(90deg)",
            "transform": "rotate(90deg)" /* For modern browsers(CSS3)  */
        });
    });
    $('.div3 .media').click(function(){
        $('.ellipse_div img').css({
            "-webkit-transform": "rotate(180deg)",
            "-moz-transform": "rotate(180deg)",
            "transform": "rotate(180deg)" /* For modern browsers(CSS3)  */
        });
    });
});
