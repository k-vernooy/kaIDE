function switchTab(tab) {
    document.getElementsByClassName("focusTab")[0].className = "tab";
    tab.classList.add("focusTab");
    document.getElementById("1-i").focus();
}

function brighten() {
    bg.className += " bright";
    document.getElementsByClassName("focusTab")[0].className += " bright";
}

function darken() {
    bg.className = "";
    document.getElementsByClassName("focusTab")[0].className = "tab focusTab";
}