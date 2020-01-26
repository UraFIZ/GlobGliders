$(document).ready(function(){
    $(window).scroll(function(){
       if($(window).scrollTop()>1900){
           $(".special-info-menu-wrapper").css("position", "unset");
           $(".left-info-part").css("align-items", "flex-end")
       }else if($(window).scrollTop()<1684 && $(window).scrollTop()>1100){
        $(".special-info-menu-wrapper").css("position","fixed");
        $(".left-info-part").css("align-items", "unset")
     }
    })
    getScrollingToTheItem();
    navbarFixed(removeWhiteTheme, addWhiteTheme);
    getChangeMenuItemsWhileScrolling();

})

function getScrollingToTheItem() {
    $(".special-info-menu-wrapper").on('click',".menu-item", function() {
        var itemPosition = 0;
        var btnsIndex = $(this).index();
        var item = $(this).parents(".left-info-part").siblings().find(".spacial-info-article-wrapper").eq(btnsIndex);
        itemPosition = findMiddleHeightItemForScrolling(item);
        $(this).addClass('menu-item-active').siblings().removeClass('menu-item-active');
        $("html, body").animate({ scrollTop:  itemPosition}, 1000);
      });
}
function findMiddleHeightItemForScrolling(item) {
        var itemOffset = $(item).offset().top;
        var itemHeight = $(item).height();
        var windowHeight = $(window).height();
        if (itemHeight < windowHeight) {
            return itemOffset - ((windowHeight / 2) - (itemHeight / 2));
        } else {
            return itemPosition = itemOffset;
        };
}
function removeWhiteTheme() {
    $("header").removeClass("special-info-header");
}
function addWhiteTheme() {
    $("header").addClass("special-info-header");
}
function getChangeMenuItemsWhileScrolling() {
    var scrollingItems = $(".spacial-info-article-wrapper");
    var scrollItemsHeightArr = [];
    $(scrollingItems).each(function (inx, item) {
        scrollItemsHeightArr[inx] = findMiddleHeightItemForScrolling(item);
        
    })
    var menuItems = $(".menu-item");
    $(window).scroll(function () {
        var scrollItem = $(this).scrollTop();
        $(scrollItemsHeightArr).each(function (inx, item) {
            if(item <= scrollItem) {
                $(menuItems).removeClass("menu-item-active");
                $(menuItems).eq(inx).addClass("menu-item-active");
            }
          })

    }).scroll();
}
