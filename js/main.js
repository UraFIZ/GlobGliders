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
    filterLocationItems();
    var owlItems = $(".grid-container .owl-item");
    getCouruselLocatinSection(owlItems);
    
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
    if($(window).width() <= 600) {
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
// function getInitLocationBtns() {
//     if($(window).width() <= 600) {
//         $(".location-type-container").addClass("owl-carousel");
//         $('.location-type-container.owl-carousel').owlCarousel({
//             loop: false,
//             autoplay: false,
//             nav:false,
//             dots: false,
//             margin: -20,
//             center:true,
//             startPosition: 1,
//             responsive: {
//                 0: {
//                     items: 1.3
//                 },
//             }
//         })
//     }
// }

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
// function getAttrOfBtnToMakeCarouser(data) {
//     console.log(data);
//     var locationBtns = $(".location-type-container button");
//     var listOfAttrs = [];
//     $(locationBtns).each(function(inx, item) {
//         listOfAttrs.push($(item).attr("data-filter"));
//     })
//     $(data).each(function(inx, item) {
//         $(item).attr("data-filter", listOfAttrs[inx]);
//      })
// }

function filterLocationItems() {
    var allLocationBtns = $(".location-type-container button");
         allLocationBtns.click(function (e) {
        $('.location-type-container button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        var classForFilter = ($(window).width()<=600) ? ".location-grid .owl-stage" : ".location-grid";

        $(classForFilter).isotope({
            filter: selector
        });
        if($(window).width()<=600) {
               var owl = $('.location-grid');
               owl.trigger("to.owl.carousel", [0, 0, true]);
                owl.owlCarousel();
                $(".grid-container .owl-stage").width(setWidthOfItemOwlContainer(selector).width);
                $(".grid-container .owl-stage").height(setWidthOfItemOwlContainer(selector).height);
        }

        return false;
    })
}
function setWidthOfItemOwlContainer(selectItem) {
    var widthOfContainer = 0;
    var ownItems = $(".grid-container .owl-item").filter(selectItem);
    var heightItem = 0;
    var deltaWidth = ownItems.length;
    $(ownItems).each(function(inx, item){
        widthOfContainer += $(item).width();
        heightItem = $(item).height();
    })
    return {
        width: Math.floor(widthOfContainer - deltaWidth * 20),
        height: heightItem
    } 
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


