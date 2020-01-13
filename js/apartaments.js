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
})

