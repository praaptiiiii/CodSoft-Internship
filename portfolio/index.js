$(document).ready(function() {
    $(".delay-class").hide();

    setTimeout(function() {
        $("h1").fadeIn();
        $("img").fadeIn();
    }, 750);
    setTimeout(function() {
        $("h4").fadeIn();
    }, 1500);
    setTimeout(function() {
        $("h6").fadeIn();
    }, 2500);
    setTimeout(function() {
        $(".btn-list").fadeIn();
    }, 3500);
    setTimeout(function() {
        $("a").fadeIn();
    }, 4500);
});
$("button").hover(function(){
    $(this).addClass("text-hover");
}, function(){
    $(this).removeClass("text-hover"); // Reset color when hover is removed
});

