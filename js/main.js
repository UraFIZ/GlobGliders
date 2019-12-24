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
    getInitLocationBtns();
    filterLocationItems();
    var owlItems = $("#addToLocationOwlCarousel .owl-item");
    getCouruselLocatinSection(owlItems);
    var owlItemsBtn = $("#addToLocationBtnOwlCarousel > div.owl-stage-outer > div > div");
    getAttrOfBtnToMakeCarouser(owlItemsBtn);
    // AOS Instance
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
            margin: 5,
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
        $('#addToLocationOwlCarousel').owlCarousel({
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
function getInitLocationBtns() {
    if($(window).width() <= 600) {
        $("#addToLocationBtnOwlCarousel").addClass("owl-carousel");
        $('#addToLocationBtnOwlCarousel').owlCarousel({
            loop: true,
            autoplay: false,
            nav:false,
            dots: false,
            margin: 30,
            startPosition: 1,
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
function getAttrOfBtnToMakeCarouser(data) {
    var locationBtns = $(".location-type-container button");
    var listOfAttrs = [];
    $(locationBtns).each(function(inx, item) {
        listOfAttrs.push($(item).attr("data-filter"));
    })
    $(data).each(function(inx, item) {
        $(item).attr("data-filter", listOfAttrs[inx]);
     })
}
// function setWidthOfItemOwlContainer(selectItem) {
//     var widthOfContainer = 0;
//     var ownItems = $(".location-grid .owl-item").filter(selectItem);
//     console.log(ownItems);
//     var heightItem = 0;
//     var deltaWidth = ownItems.length;
//     $(ownItems).each(function(inx, item){
//         widthOfContainer += $(item).width();
//         heightItem = $(item).height();
//     })
//     return {
//         width: Math.floor(widthOfContainer - deltaWidth * 20),
//         height: heightItem
//     } 
// }
function filterLocationItems() {
    if($(window).width()<=600) {
        var owlItemsBtn = $("#addToLocationBtnOwlCarousel > div.owl-stage-outer > div > div");
        owlItemsBtn.click(function (e) {
            $('#addToLocationBtnOwlCarousel > div.owl-stage-outer > div > div').removeClass('active');
            e.target.classList.add('active');
            let selector = $(e.target).attr('data-filter');
            var classForFilter = $(".location-grid .owl-stage");
            $(classForFilter).isotope({
                filter: selector
            });
            // console.log(setWidthOfItemOwlContainer(selector).width)
            // $("#addToLocationOwlCarousel .owl-stage").width(setWidthOfItemOwlContainer(selector).width);
            var owl = $('.location-grid');
            owl.trigger("to.owl.carousel", [0, 0, true]);
            owl.owlCarousel();
            var secandOwl = $('#addToLocationOwlCarousel');
            console.log(secandOwl)
            // secandOwl.on('initialize.owl.carousel', function(event) {})
            // secandOwl.owlCarousel({
            //     loop: false,
            // });
             return false;
        })
    }
    // var allLocationBtns = $(".location-type-container button");
    //      allLocationBtns.click(function (e) {
    //     $('.location-type-container button').removeClass('active');
    //     e.target.classList.add('active');
    //     let selector = $(e.target).attr('data-filter');
    //     var classForFilter = ($(window).width()<=600) ? ".location-grid .owl-stage" : ".location-grid";

    //     $(classForFilter).isotope({
    //         filter: selector
    //     });
    //     if($(window).width()<=600) {
    //            var owl = $('.location-grid');
    //            owl.trigger("to.owl.carousel", [0, 0, true]);
    //             owl.owlCarousel();
    //             $(".grid-container .owl-stage").width(setWidthOfItemOwlContainer(selector).width);
    //             $(".grid-container .owl-stage").height(setWidthOfItemOwlContainer(selector).height);
    //     }

    //     return false;
    // })
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


