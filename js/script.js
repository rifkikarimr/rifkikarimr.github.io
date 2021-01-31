// effect ketika di klik
$('.page-scroll').on('click', function(){

  // ambil isi href
  var href = $(this).attr('href');
  // ammbil element
  var elemenHref = $(href);

  //pindahkan scroll
  $('html, body').animate({
    scrollTop: elemenHref.offset().top - 100
  }, 1000, 'swing')

  e.preventDefault();
});
