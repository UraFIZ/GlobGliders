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
    getInitiationOwlCarousalForLocationSection();
    filterLocationItems();
    var owlItems = $(".grid-container .owl-item");
    getCouruselLocatinSection(owlItems)
   

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
            loop: true,
            autoplay: false,
            nav:false,
            dots: false,
            margin: -20,
            responsive: {
                0: {
                    items: 1.5
                },
            }
        })
    }
}
function getCouruselLocatinSection(data) {
    var colgrid = $(".location-grid .col-12");
    var listOfClass = [];
    $(colgrid).each(function(inx, item){
        listOfClass.push($(item).attr("class").split(" ")[3]);
       })

    $(data).each(function(inx, item) {
       $(item).addClass(listOfClass[inx]);
    })

}
function filterLocationItems() {
    var allLocationBtns = $(".location-type-container button");
         allLocationBtns.click(function (e) {
        $('.location-type-container button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        var classForFilter = ($(window).width()<=768) ? ".location-grid .owl-stage" : ".location-grid";
        $(classForFilter).isotope({
            filter: selector
        });

        return false;
    })
}
