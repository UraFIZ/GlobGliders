$(document).ready(function(){
    if($(".join-step-two").length > 0) {
        $("#join-phone").intlTelInput({
            allowDropdown:true,
            autoPlaceholder:"polite",
            separateDialCode:true,
        })
    }
    if($(".join-step-one .button-primary").length > 0) {
        getToLocalStorageData1(".join-step-one .button-primary")
    }
    if($(".join-step-five .button-primary").length > 0) {
        getToLocalStorageData5(".join-step-five .button-primary")
    }
    
})

function getToLocalStorageData1(cls) {
 $(cls).click(function(e){
    e.preventDefault();
    var name = $("#first-name").val();
    var lastName = $("#last-name").val();
if(!!name && !!lastName) {
    localStorage.setItem("name", name);
    localStorage.setItem("last-name", lastName);
    // window.location.href = "http://127.0.0.1:5502/join-step-two.html";
    window.location.href = "https://infallible-boyd-0f87d8.netlify.com/join-step-two.html"
}
   
 })
}
function getToLocalStorageData5(cls) {
    $(cls).click(function(e){
       e.preventDefault();
       localStorage.setItem("finish", true)
    //    window.location.href = "http://127.0.0.1:5502/starting-gild.html"
       window.location.href = "https://infallible-boyd-0f87d8.netlify.com/starting-gild.html"
    })
   }