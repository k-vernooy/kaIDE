function showSection(el) {
    // select the correct sidebar

    var id = el.id.split("_")[0];
    
    var section = document.getElementById(id);
    var sections = document.getElementById("leftCol").children;

    // hide all other sections
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    // show the correct sidebar
    section.style.display = "block";
}

showSection(document.getElementById("files_button"));

$( ".sideButton" ).on("click", function(event){
    var els = document.getElementsByClassName("sideButton");
    
    for ( var i = 0; i < els.length; i++ ){
        els[i].classList.remove("active")
    }
    
    $(this).addClass("active");

    var el = event.target;
    if (!el.id)
        el = el.parentNode;

    showSection(el);
});
