var menu = {
  open : function(){
    $('header .menu-burguer').addClass('open');
    $('#menu-responsive').addClass('open');
    $('body').css('overflow-y', 'hidden');
  },
  close : function(){
    $('header .menu-burguer').removeClass('open');
    $('#menu-responsive').removeClass('open');
    $('body').css('overflow-y', 'auto');
  }
}


$(document).on('click', 'header .menu-burguer', function(e){
  e.preventDefault();
  menu.open();
});

$(document).on('click', '#menu-responsive .menu-close', function(e){
  e.preventDefault();
  menu.close();
});

$(document).on('click', '#menu-responsive ul li a', function(e){
  e.preventDefault();
  menu.close();
});

$(document).on('click', '#box-overlay .centered .closed', function(e){
  e.preventDefault();
  $('#box-overlay').fadeOut();
})

function printSliderBox(){

  $.when($('#box-overlay').fadeIn().html(
    '<div class="centered">'+
      '<div id="myCarouselFotos" class="myCarouselFotos carousel slide hidden-xs" data-ride="carousel">'+
        '<div class="carousel-inner">'+
          '<div class="item active">'+
            '<img src="./images/slides-home/slide1.jpg" alt="">'+
          '</div>'+
          '<div class="item">'+
            '<img src="./images/slides-home/slide2.jpg" alt="">'+
          '</div>'+
          '<div class="item">'+
            '<img src="./images/slides-home/slide3.jpg" alt="">'+
          '</div>'+
          '<div class="item">'+
            '<img src="./images/slides-home/slide4.jpg" alt="">'+
          '</div>'+
          '<div class="item">'+
            '<img src="./images/slides-home/slide5.jpg" alt="">'+
          '</div>'+
        '</div>'+
        '<a class="left carousel-control" href=".myCarouselFotos" data-slide="prev">'+
          '<span class="arrow" style="left: 10px;"><img src="./images/flechaizq.svg" alt=""></span>'+
          '<span class="sr-only">Previous</span>'+
        '</a>'+
        '<a class="right carousel-control" href=".myCarouselFotos" data-slide="next">'+
          '<span class="arrow" style="right: 10px;"><img src="./images/flechaderech.svg" alt=""></span>'+
          '<span class="sr-only">Next</span>'+
        '</a>'+
      '</div>'+
      '<a href="#" class="closed"></a>'+
    '</div>'
  )).done(function(){
    $('#box-overlay .centered').hover(function(){
      $('#box-overlay').attr('data-over', 'true');
    }, function(){
      $('#box-overlay').attr('data-over', 'false');
    });

    $(document).on('click', '#box-overlay', function(){
      if($('#box-overlay').attr('data-over') == 'false'){
        $(this).fadeOut();
      }
    })

  })

}

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

$(window).on('load', function(){
  $('#loader').fadeOut();
})

$(document).ready(function(){
  $('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  $('.slick-slider .slick-arrow').text('');
})
