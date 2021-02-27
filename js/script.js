// efek ketika link di klik
$('.page-scroll').on('click', function(e){

  // ambil isi href
  var tujuan = $(this).attr('href');

  // tangkap element yang bersangkutan
  var elemenTujuan = $(tujuan);

  $('html, body').animate({
      scrollTop: elemenTujuan.offset().top - 50
  }, 1250, 'swing');

  e.preventDefault();
});

//about
$(window).on('load', function(){
  $('.pLeft').addClass('pMuncul');
  $('.pRight').addClass('pMuncul');
});

// parallax
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
  });

  if(wScroll > $('.portfolio').offset().top - 10){
    $('.portfolio .thumbnail').each(function(i) {
      setTimeout(function() {
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 200 * (i+1))
    }); 
  }

});
