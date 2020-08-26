$('#go_top_page').css({ display: 'none' })
$('#header').css({ background: 'transparent' })
$(window).on('scroll', function () {
  nowloc = $(window).scrollTop();
  if (nowloc > 500) {
    $('#go_top_page').fadeIn(1000)
    $('#go_top_page').css({ 'animation-iteration-count': 3 })
  }
  else {
    $('#go_top_page').fadeOut(1000)
    $('#go_top_page').css({ 'animation-iteration-count': 'none' })
  }
  if (nowloc <= 300) {
    $('#header').css({
      background: 'transparent'
    });
  } else {
    $('#header').css({
      background: 'rgba(0,0,0,0.5)'
    })
  }
});