$(document).ready(function($) {
  
  $('.locate .locate-on-map').click(function(event) {
    if ($('#map-collides').hasClass('shown')){
      $('#map-collides').removeClass('shown');
    } else {
      $('#map-collides').addClass('shown');
      $('html').animate({
        scrollTop: $(".locate .locate-on-map").offset().top - $('header').outerHeight()  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    console.log($('header').outerHeight()); 
    }
  });

  $(document).scroll(function(event) {
    if($(document).scrollTop() >= 100){
      $('header').addClass('scrolled');
    } else{
     $('header').removeClass('scrolled'); 
    }
  });

  $('nav a').click(function(event) {
    
    let target = '#' + $(this).attr("class").split(' ')[1];
    console.log(target);
    $('html').animate({
        scrollTop: $(target).offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки


  });







});