require('../sass/style.scss');

$(document).ready(function(){
    $(".slider_container").slick({
        infinite: true,
        responsive: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });


$(".cross").hide();
$(".menu").hide();


$(".hamburger").click(function() {
    $(".menu").slideToggle( "slow", function() {
        $(".hamburger").hide();
        $(".cross").show();
    });
});

$(".cross").click(function() {
    $(".menu").slideToggle( "slow", function() {
        $(".cross").hide();
        $(".hamburger").show();
    });
});





});