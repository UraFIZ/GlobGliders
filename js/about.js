$(document).ready(function () {
    getInitiationOwlCarousalForThings();
});

function getInitiationOwlCarousalForThings() {
    if($(window).width() <= 992) {
        $(".things-grid").addClass("owl-carousel");
        $('.things-grid').owlCarousel({
            loop: true,
            autoplay: false,
            nav:false,
            dots: true,
            margin: 5,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }
}