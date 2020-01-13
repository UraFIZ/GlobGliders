$(document).ready(function(){
    navbarFixed();
})
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