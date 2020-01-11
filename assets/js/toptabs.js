function switchTab(e) {
    var el = e.target;
    var id = el.id.split("_")[0];

    var win = document.getElementById(id);
    var tabs = document.getElementsByClassName("tab");
    var windows = document.getElementsByClassName("codearea");
    
    for ( var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("focusTab");
    }

    e.target.classList.add("focusTab");

    for ( var i = 0; i < windows.length; i++) {
        windows[i].style.display = "none";
    }

    win.style.display = "block";
    // document.getElementById("1-i").focus();
}

// function brighten() {
//     bg.className += " bright";
//     document.getElementsByClassName("focusTab")[0].className += " bright";
// }

// function darken() {
//     bg.className = "";
//     document.getElementsByClassName("focusTab")[0].className = "tab focusTab";
// }

$( ".tab" ).on("click", function(event){
    switchTab(event);
});