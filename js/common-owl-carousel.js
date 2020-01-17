$(document).ready(function(){
    getInitiationOwlCarousalInOneLine4tems(".workspace-near-accommodation-item-wrapper");
    getInitiationOwlCarousalInOneLine(".thing-to-do-item-wrapper");
    getInitiationOwlCarousalInOneLine(".travel-item-wrapper");

})

function getInitiationOwlCarousalInOneLine(id) {
    $(id).addClass("owl-carousel");
    $(id).owlCarousel({
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
function getInitiationOwlCarousalInOneLine4tems(id) {
  $(id).addClass("owl-carousel");
  $(id).owlCarousel({
      loop: false,
      autoplay: false,
      nav:true,
      dots: false,
      center:false,
      margin: 20,
      rewind:true,
      responsive: {
          1300: {
            items: 4
          },
          1200: {
              items: 4
          },
          1024: {
            items: 3,
          },
          992: {
            items: 3
          },
          768: {
            items: 2
          },
          600: {
            items: 1
          },
          500: {
            items: 2,
            margin: 100
          },
          400: {
            items: 1,
          },
          300: {
            items: 1,
          }
      }
  })
}