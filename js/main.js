$(document).ready(function () {

  // making the nav stick
var menu = $('.navbar');
var origOffsetY = menu.offset().top;
function scroll() {
  if ($(window).scrollTop() >= origOffsetY) {
    $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('fixed-top');
    }
   }
  document.onscroll = scroll;
});

// smooth scrolling from nav
$(".navbar-dark ul li a[href^='#']").on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
     scrollTop: $(this.hash).offset().top - $('.navbar').height()
   }, 300, function(){
     window.location.hash = hash;
   });
});

// Smooth Scrolling on parallax button
$("#section-parallax col-sm-8 a[href^='#']").on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
     scrollTop: $(this.hash).offset().top - $('.navbar').height()
   }, 300, function(){
     window.location.hash = hash;
   });
});

// Footer button smooth scrolling
$(".footer .scroll-to-top-button a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });
});

$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});


$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});
