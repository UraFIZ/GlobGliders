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
    filterLocationItems(".select-location-section .location-type-container button", ".select-location-section .location-grid")
    onExpendTextBlock();
    getPagination();
 
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
            $(this).siblings().hide();
        }
    })
}
function getPagination() {
    var items = $(".select-location-section .location-grid .grid-item");
    var numItems = items.length;
    var perPage = 8;

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
function filterLocationItems(btnsLocation, filterClass) {
    var owlItemsBtn = $(btnsLocation);
    owlItemsBtn.click(function (e) {
        $(btnsLocation).removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        
        var classForFilter = $(filterClass);
        $(classForFilter).isotope({
            filter: selector
        });
        // console.log(setWidthOfItemOwlContainer(selector).width)
        // $("#addToLocationOwlCarousel .owl-stage").width(setWidthOfItemOwlContainer(selector).width);
        if($(window).width() <= 600) {
            var owl = $('.location-grid');
            owl.trigger("to.owl.carousel", [0, 0, true]);
            owl.owlCarousel();
        }
         return false;
    })
}
