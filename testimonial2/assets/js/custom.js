$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
  autoplay: false,
  center: true,
  loop: true,
   dots: true,
  nav:false,
    items:1,
    margin:10,
    responsive:{
         0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }

    }
});
})
