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


