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
