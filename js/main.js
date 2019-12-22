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
    navbarFixed();
    getInitiationOwlCarousal();
    getInitiationOwlCarousalForLocationSection();
    limitedOfOwlCarousel();
    filterLocationItems();
    var owlItems = $(".grid-container .owl-item");
    getCouruselLocatinSection(owlItems)
    
    // AOS Instance
    AOS.init();

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
function getInitiationOwlCarousalForLocationSection() {
    if($(window).width() <= 768) {
        $("#addToLocationOwlCarousel").addClass("owl-carousel");
        $('.grid-container .owl-carousel').owlCarousel({
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

function getCouruselLocatinSection(data) {
    var colgrid = $(".location-grid .grid-item");
    var listOfClass = [];
    $(colgrid).each(function(inx, item){
        listOfClass.push($(item).attr("class").split(" ")[5]);
       })

    $(data).each(function(inx, item) {
       $(item).addClass(listOfClass[inx]);
    })

}
function limitedOfOwlCarousel() {
    var owl = $('.grid-container .owl-carousel');

    // Listen to owl events:
    owl.on('initialize.owl.carousel', event => {
        //get this var out???? 
        var items = event.item.count
        console.log(items-4)
        //event handler
        owl.trigger('to.owl.carousel', items)
    })
    owl.owlCarousel({
        startPosition: 4
    });
}
function filterLocationItems() {
    var allLocationBtns = $(".location-type-container button");
         allLocationBtns.click(function (e) {
        $('.location-type-container button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        
        var classForFilter = ($(window).width()<=768) ? ".location-grid .owl-stage" : ".location-grid";
        var owl = $('.grid-container .owl-carousel');
        owl.owlCarousel();
        $(classForFilter).isotope({
            filter: selector
        });

        return false;
    })
}
let nav_offset_top = $('header').height() + 50;
function navbarFixed() {
    if ($('header').length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('header').addClass('navbar_fixed');
                $("header").removeClass("header");
            } else {
                $('.header').removeClass('navbar_fixed');
                $("header").addClass("header");
            }
        })
    }
}


