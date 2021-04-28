
function closefn(){
    window.open('../index.html','_self');
    console.log("Closed");
}

$(".papers a").on("click", function() {
    $(".papers").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
