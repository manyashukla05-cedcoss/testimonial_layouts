$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
/*$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
 $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');*/
})
