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
    // $("label[for=arrival-date]").click(function(){
    //     console.log("ddd")
    //     $("#arrival-date").focus();
    // })
});