$(document).ready(function () {
    $("#arrival-date").datepicker({
        dateFormat: "dd/mm/yy",
        showOn: "button",
        buttonText: '<i class="far fa-calendar-alt mr-2"></i><span>Arrival Date</span>'
    });
    $("#check-date").datepicker({
        dateFormat: "dd/mm/yy",
        showOn: "button",
        buttonText: '<i class="far fa-calendar-alt mr-2"></i><span>Check Out Date</span>'
    });
    getInitiationOwlCarousalForSelectLocationSection();
    getInitSelectLocationBtns();
    onExpendTextBlock();
    if($(window).width() <= 600) {
        getNewTab(".select-location-section .location-type-container .owl-item", ".location-grid", true)
    }else{
        getPagination();
        getNewTab(".select-location-section .location-type-container button", ".location-grid", false)
    }
 
});

function onExpendTextBlock() {
    $(".card-text-desc").each(function (inx, item) {
        if ($(item).height() > 94) {
            var readMore = $(this).siblings();
            $(readMore).click(function () {
                $(this).parent().css("overflow", "visible");
                $(this).parent().css("height", "auto");
                $(this).hide();
                $(this).siblings().find(".read-less").click(function () {
                    $(this).parents(".grid-item-desc").css("overflow", "hidden");
                    $(this).parents(".grid-item-desc").css("height", "94px");
                    $(this).parents().find('.read-more').show();
                })
            })
        }else{
            // $(this).siblings().hide();
        }
    })
}
function getPagination() {
    var items = $(".select-location-section .location-grid.active .grid-item");
    var numItems = items.length;
    var perPage = 4;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "Back",
        nextText: "Next",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
}


function getNewTab(btnClass, cardClass, isResponsive) {
    $(btnClass).on('click', function() {
        if(isResponsive) {
            var btnsIndex = $(this).index()-2
            if($(this).index()-2 == 3) {
                btnsIndex = 0;
            }
        }else{
            var btnsIndex = $(this).index()
        }
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('.select-location-section .grid-container').find(cardClass).removeClass('active').eq(btnsIndex).addClass('active');
          onExpendTextBlock();
        if($(window).width() <= 600) {
            getInitiationOwlCarousalForSelectLocationSection();
        }else{
             getPagination();
        }
      });
}
function getInitiationOwlCarousalForSelectLocationSection() {
    if($(window).width() <= 600) {
        $(".select-location-section .location-grid.active").addClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            loop: false,
            autoplay: false,
            nav:true,
            startPosition: 0,
            dots: false,
            margin: 5,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }
}
function getInitSelectLocationBtns() {
    if($(window).width() <= 600) {
        $("#addToSelectLocationBtnOwlCarousel").addClass("owl-carousel");
        $('#addToSelectLocationBtnOwlCarousel').owlCarousel({
            loop: true,
            autoplay: false,
            nav:false,
            dots: false,
            margin: 10,
            startPosition: 0,
            responsive: {
                0: {
                    items: 1.3
                },
            }
        })
    }
}
