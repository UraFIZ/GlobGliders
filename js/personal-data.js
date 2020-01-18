$(document).ready(function(){
    $(".reservation-data-wrapper #arrival-date").datepicker({
        dateFormat: "dd/mm/yy",
        showOn: "button",
        buttonText: '<i class="far fa-calendar-alt mr-2"></i><span>19 July 2020</span>'
    });
    $(".reservation-data-wrapper #check-date").datepicker({
        dateFormat: "dd/mm/yy",
        showOn: "button",
        buttonText: '<i class="far fa-calendar-alt mr-2"></i><span>24 July 2020</span>'
    });
    isSortBtnHidden();
    getNewTab(".personal-btn", ".personal-data-section", ".personal-item");
})

function isSortBtnHidden() {
    if($(".personal-btn.active").text() == "Profile") {
        $(".personal-btn-container .btn-group").hide();
    }else{
        $(".personal-btn-container .btn-group").show();
    }
}
function getNewTab(btnClass, containerClass, cardClass) {
    $(btnClass).on('click', function() {
        var btnsIndex = $(this).index()
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest(containerClass).find(cardClass).removeClass('active').eq(btnsIndex).addClass('active');
          isSortBtnHidden();
      });
}
