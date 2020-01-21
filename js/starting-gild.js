$(document).ready(function() {
    onClickPopularLinks();
})

function onClickPopularLinks() {
    var searchInput = $("#location");
    var setOfPopularLocation = $(".popular-location-item");
    $(setOfPopularLocation).each(function(inx, item) {
        $(item).click(function(){
            $(searchInput).val($(this).text());
        })
    })
}
