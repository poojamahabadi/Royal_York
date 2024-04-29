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


