function switchTab(tab) {
    document.getElementsByClassName("focusTab")[0].className = "tab";
    tab.className += " focusTab"
    document.getElementById("inputText").focus();
}