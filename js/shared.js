$(document).ready(function(){
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;
    bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    // autoplay: true,
    dots: false,
    loop: false,
    margin: 10,
    responsiveRefreshRate: 200,
    navText: [
      '<span>&#10094;</span>',
      '<span>&#10095;</span>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);
    function syncPosition(el) {
        var current = el.item.index;
        thumbs
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
        .find(".owl-item.active")
        .first()
        .index();

        var end = thumbs
        .find(".owl-item.active")
        .last()
        .index();
        if (current > end) {
          thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
          thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
          }
    }
    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
      });
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
