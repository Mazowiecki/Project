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


let addbox = $(".recent_box");
let atc = $(".addtc_box");
atc.hide();




    addbox.on("mouseenter", function (event) {
        let addbox = $(event.target);
        addbox.children().slideDown("fast",function () {
        })
    })

    addbox.on("mouseleave", function (event) {
        addbox.children().slideUp("fast",function () {
        })
    })

});