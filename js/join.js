$(document).ready(function(){
    if($(".join-step-two").length > 0) {
        $("#join-phone").intlTelInput({
            allowDropdown:true,
            autoPlaceholder:"polite",
            separateDialCode:true,
        })
    }

})