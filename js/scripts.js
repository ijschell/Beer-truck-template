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
