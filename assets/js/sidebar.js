$( ".sideButton" ).on("click", function(event){
    var els = document.getElementsByClassName("sideButton");
    for ( var i = 0; i < els.length; i++ ){
        els[i].classList.remove("active")
    }
    $(this).addClass("active");
});