$(function() {

  $(window).scroll(function() {
    if ($(window).width() < 754) {
      var mass = 100 + '%';
      if ($(window).scrollTop() > 10) {
        $('.container').css({
        'width': mass,
        'padding':'1rem 1.5rem',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});



        $('.el4').css({
        'font-size': '2rem', 
        'line-height': '0rem', 
        'padding': '0px 0% 0px 0%',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});

        $('.nav-s').css(
          {'display': 'grid',
          'grid-template-columns': 'auto auto auto',
          'transition-property': 'all',
          'transition-duration': '1s',
          'transition-timing-function': 'ease',
          'transition-delay': '0s',
          'align-content': 'center'}
        );
      }
      else {
        mass = 90 + '%';
        $('.container').css({'width': mass,
        'padding':'1rem 1.5rem',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'padding': '1.4rem 1.5rem',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});

        $('.el4').css({'font-size': '3rem', 
        'line-height': '0rem', 
        'padding': '30px 0px 0px 0px',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});
      
        $('.nav-s').css(
          {'display': 'none',
          'transition-property': 'all',
          'transition-duration': '1s',
          'transition-timing-function': 'ease',
          'transition-delay': '0s'}
        );
      }
    }
    //else {
      //$('.nav-s').css(
      //  {'display': 'none'}
     // );
    //}


    else if ($(window).width() <= 776 && $(window).width() >= 754) {
      var mass = 100 + '%';
      if ($(window).scrollTop() > 10) {
        $('.container').css({
        'width': mass,
        'padding': '1rem 1.5rem',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});

        $('.nav-s').css(
          {'display': 'none'}
        );

        $('.el4').css({
        'font-size': '2rem', 
        'line-height': '0rem', 
        'padding': '30px 0% 0px 0%',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});
      }
      else {
        mass = 90 + '%';
        $('.container').css({'width': mass,
        'padding': '1.4rem 1.5rem',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});

        $('.el4').css({'font-size': '3rem', 
        'line-height': '0rem', 
        'padding': '30px 0px 0px 0px',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});
      }
    }


    else if ($(window).width() <= 1076 && $(window).width() > 776) {
      var mass = Math.max(2, 4-0.18*$(this).scrollTop()) + 'rem';
      var pad = Math.max(13, 16-0.05*$(this).scrollTop()) + 'px';
      $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});

      $('.container').css({'width': '93%'});
    }
   else if ($(window).width() <= 1586  && $(window).width() > 1076) {
      var mass = Math.max(2, 4-0.02*$(this).scrollTop()) + 'rem';
      var pad = Math.max(5, 16-0.02*$(this).scrollTop()) + 'px';
      $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});

      $('.container').css({'width': '85%'});
    }
    else if ($(window).width() > 1586) {
      var mass = Math.max(3, 4.5-0.02*$(this).scrollTop()) + 'rem';
      var pad = Math.max(10, 16-0.02*$(this).scrollTop()) + 'px';
      $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});

      $('.container').css({'width': '85rem'});

    }
  });
});



function on() {
  document.getElementsByClassName("overlay").style.display = "block";
}

function off() {
  document.getElementsByClassName("overlay").style.display = "none";
}
