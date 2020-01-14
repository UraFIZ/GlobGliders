$(document).ready(function () {
    $(".apartment-description #arrival-date").datepicker({
        dateFormat: "dd/mm/yy",
        showOn: "button",
        buttonText: '<i class="far fa-calendar-alt mr-2"></i><span>19 July 2020</span>'
    });
    $(".apartment-description #check-date").datepicker({
        dateFormat: "dd/mm/yy",
        showOn: "button",
        buttonText: '<i class="far fa-calendar-alt mr-2"></i><span>24 July 2020</span>'
    });
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
      getInitiationOwlCarousalForThingsToDo();
      getInitiationOwlCarousalForTravelArticles();
})

function getInitiationOwlCarousalForThingsToDo() {
      $(".thing-to-do-item-wrapper").addClass("owl-carousel");
      $('.thing-to-do-item-wrapper').owlCarousel({
          loop: false,
          autoplay: false,
          nav:true,
          dots: false,
          center:false,
          margin: 20,
          rewind:true,
          responsive: {
              1200: {
                  items: 5
              },
              1024: {
                items: 4
              },
              768: {
                items: 3
              },
              600: {
                items: 1
              },
              500: {
                items: 2,
                margin: 100
              },
              400: {
                items: 2,
                margin: 100
              },
              300: {
                items: 2,
                margin: 100
              }
          }
      })
  }
  function getInitiationOwlCarousalForTravelArticles() {
    $(".travel-item-wrapper").addClass("owl-carousel");
    $('.travel-item-wrapper').owlCarousel({
        loop: false,
        autoplay: false,
        nav:true,
        dots: false,
        center:false,
        margin: 20,
        rewind:true,
        responsive: {
            1200: {
                items: 5
            },
            1024: {
              items: 4
            },
            768: {
              items: 3
            },
            600: {
              items: 1
            },
            500: {
              items: 2,
              margin: 100
            },
            400: {
              items: 2,
              margin: 100
            },
            300: {
              items: 2,
              margin: 100
            }
        }
    })
}


