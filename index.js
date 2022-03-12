$(function(){
  $(document).on('scroll', function(){
    if($(window).scrollTop()>100){
      $('header').css('background','rgba(255, 255, 255, 0.9)');
      $('#nav-bar').css('color', 'black');
      $('.icon').css('filter','none');
      $('#nav-icon').css('filter','none');
    } else {
      $('header').css('background','none');
      $('#nav-bar').css('color', 'white');
      $('.icon').css('filter','invert(1)');
      $('#nav-icon').css('filter','invert(1)');
    }
  });

  $(window).on('scroll', function(){
    if($(window).scrollTop()+$(window).height() > $(document).height()-100){
      $('#top-btn').css('filter','invert(1)');
    } else {
      $('#top-btn').css('filter','opacity(0.5)');
    }
  });

  $('#nav-icon').on('click', function(){
    $('#sub-menu').animate({marginLeft: "0rem"}, 600);
  });

  $('#nav-close').on('click', function(){
    $('#sub-menu').animate({marginLeft: "-20rem"}, 600);
  });

  $('#top-btn').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 500);
  });

  $('#search-btn').on('click', function(){
    $('#nav-icon').fadeOut();
    $('#logo').fadeOut();
    $('#nav-btn').fadeOut();
    $('#search-wrap').fadeIn();
  });

  $('#search-close').on('click', function(){
    $('#search-wrap').fadeOut();
    $('#logo').fadeIn();
    $('#nav-btn').fadeIn();
    if($(window).width() <= 600){
      $('#nav-icon').fadeIn();
    }
  });

  $("#best-right").click(function() {
      $("#best-slider").animate({
        marginLeft: "-450px"
      }, function() {
          $("#best-slider .card:first").appendTo("#best-slider");
          $("#best-slider").css({marginLeft: 0});
      });
  });
  $("#best-left").click(function() {
      $("#best-slider .card:last").prependTo("#best-slider");
      $("#best-slider").css({ "marginLeft": "-450px"});
      $("#best-slider").animate({ marginLeft: 0 });
  });

  $("#rv-right").click(function() {
      $("#rv-slider").animate({
        marginLeft: "-310px"
      }, function() {
          $("#rv-slider .rv-card:first").appendTo("#rv-slider");
          $("#rv-slider").css({marginLeft: 0});
      });
  });
  $("#rv-left").click(function() {
      $("#rv-slider .rv-card:last").prependTo("#rv-slider");
      $("#rv-slider").css({ "marginLeft": "-310px"});
      $("#rv-slider").animate({ marginLeft: 0 });
  });
});
