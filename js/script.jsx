require('../sass/style.scss');

$(document).ready(function(){
    $(".slider_container").slick({
        infinite:true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });
});
