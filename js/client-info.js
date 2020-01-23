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
})

function getScrollingToTheItem() {
    $(".special-info-menu-wrapper").on('click',".menu-item", function() {
        var btnsIndex = $(this).index();
        var item = $(this).parents(".left-info-part").siblings().find(".spacial-info-article-wrapper").eq(btnsIndex);
        var itemPosition = 0
        var itemOffset = $(item).offset().top;
        var itemHeight = $(item).height();
        var windowHeight = $(window).height();
        if (itemHeight < windowHeight) {
            itemPosition = itemOffset - ((windowHeight / 2) - (itemHeight / 2));
        } else {
            itemPosition = itemOffset;
        };
        $(this).addClass('menu-item-active').siblings().removeClass('menu-item-active');
        $("html, body").animate({ scrollTop:  itemPosition}, 1000);
      });
}
function removeWhiteTheme() {
    $("header").removeClass("special-info-header");
}
function addWhiteTheme() {
    $("header").addClass("special-info-header");
}
