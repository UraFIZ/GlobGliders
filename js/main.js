$(document).ready(function(){
    getRidOfRubbishAtElfsightPlagin();
    $(".navbar-toggler").on('click', function(){
       if(!$(".navbar-collapse").hasClass("show")) {
            $("#navbarSupportedContent").addClass("custom-extend-navbar");
        }
    })
    $("input[type=search]").on("input", function(){
        $(".fa-search").hide()
    })
    $("input[type=search]").on("blur", function(){
        $(".fa-search").show()
    })



    navbarFixed();
    getInitiationOwlCarousal();
    getInitiationOwlCarousalForLocationSection();

    // AOS Instance
    if($(window).width() <= 992) {
        $("div[data-aos]").attr("data-aos", "huy")
    }
   if($(window).width() <= 600) {
    getNewTab(".location-section .location-type-container button",'.location-section .grid-container', ".location-grid", getInitiationOwlCarousalForLocationSection)
   }else{
    getNewTab(".location-section .location-type-container button",'.location-section .grid-container', ".location-grid")
   }
   AOS.init();
})

function getInitiationOwlCarousal() {
    if($(window).width() <= 768) {
        $("#addOwlCarousel").addClass("owl-carousel");
        $('#addOwlCarousel').owlCarousel({
            loop: true,
            autoplay: false,
            nav:true,
            dots: true,
            margin: 20,
            items: 1
        })
    }
}
function getRidOfRubbishAtElfsightPlagin() {
    setTimeout(function(){
        $("#eapps-instagram-feed-1 > a").hide();
        $("[eapps-link=titleContainer]").hide();
        $(".eapps-instagram-feed-posts-grid-load-more-container").hide()
    }, 1200)
}
function getInitiationOwlCarousalForLocationSection() {
    if($(window).width() <= 600) {
        $(".location-section .location-grid.active").addClass("owl-carousel");
        $('.location-section .owl-carousel').owlCarousel({
            loop: false,
            autoplay: false,
            nav:false,
            dots: false,
            margin: -20,
            center:true,
            rewind:true,
            responsive: {
                0: {
                    items: 1.3
                },
            }
        })
    }
}


function getNewTab(btnClass, containerClass, cardClass, func) {
    $(btnClass).on('click', function() {
        var btnsIndex = $(this).index()
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest(containerClass).find(cardClass).removeClass('active').eq(btnsIndex).addClass('active');
          if(func) {
            func();
          }
      });
}



