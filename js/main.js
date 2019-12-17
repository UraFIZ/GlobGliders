$(document).ready(function(){
    $(".navbar-toggler").on('click', function(){
        console.log($(".navbar-collapse").hasClass("show"))
       if(!$(".navbar-collapse").hasClass("show")) {
            $("#navbarSupportedContent").addClass("custom-extend-navbar");
            $(".js-sity-margin").css("margin-top", "400px");
        }else{
            $(".js-sity-margin").css("margin-top", "0");
        }
    })
    getInitiationOwlCarousal();
      
})
function getInitiationOwlCarousal() {
    if($(window).width() <= 768) {
        $("#addOwlCarousel").addClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            nav:true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }
}