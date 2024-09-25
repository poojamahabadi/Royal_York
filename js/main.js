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


// articles details page recent posts
$(document).ready(function(){
    $('.recent_posts_news').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
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
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToScroll: 1,
        centerMode: true,
        slidesToShow:1,
      }
    }
  ]
    });
  });



  $(document).ready(function($) {
    $('#sliderpics').carousel({
            interval: 5000
    });
    $('[id^=carousel-selector-]').click( function(){
            var id_selector = $(this).attr("id");
            var id = id_selector.substr(id_selector.length -1);
            var id = parseInt(id);
            $('#sliderpics').carousel(id);
    });
});



// just leased slider
$(document).ready(function(){
$('.slidervariablewidth').slick({
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
      breakpoint: 1920,
      settings: {
        slidesToShow: 4.5,
      }
    },
    {
      breakpoint:1400,
      settings: {
        slidesToShow: 3.5,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToScroll: 1,
        slidesToShow:1.5,
      }
    }
  ]
});
});

// newly leased slider
$(document).ready(function(){
  $('.newlyleased').slick({
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
        breakpoint: 1920,
        settings: {
          slidesToShow: 4.5,
        }
      },
      {
        breakpoint:1400,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToScroll: 1,
          slidesToShow:1.5,
        }
      }
    ]
  });
  });


// similar units
$(document).ready(function(){
  $('.similarunits').slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
     autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint:1400,
        settings: {
          slidesToShow: 1.2,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToScroll: 1,
          slidesToShow:1.5,
        }
      }
    ]
  });
  });

// multi form js
  $(document).ready(function() {
    $('.btn-next').click(function() {
      $('.propertypopup .nav-tabs .active').parent().next('li').find('a').trigger('click');
    });
  
    $('.btn-prev').click(function() {
      $('.propertypopup .nav-tabs .active').parent().prev('li').find('a').trigger('click');
    });
  });

  
// rental listing slider
$(document).ready(function(){
  $('.rentallist_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
     autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4.5,
        }
      },
      {
        breakpoint:1400,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToScroll: 1,
          slidesToShow:1.5,
        }
      }
    ]
  });
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
    slidesToShow:2,
    }
    }]
    });


    // tenant ajax find rental homes slider
    $(document).ready(function(){
      $('.rentallist_slick.tenantslick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: true,
         autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint:1400,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToScroll: 1,
              slidesToShow:1.5,
            }
          }
        ]
      });
      });