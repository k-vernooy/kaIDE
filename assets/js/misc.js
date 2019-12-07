function switchTab(tab) {
    document.getElementsByClassName("focusTab")[0].className = "tab";
    tab.className += " focusTab"
    document.getElementById("inputText").focus();
}

function resizeToMinimum(){
    var minimum = [1000, 780];
    var current = [window.outerWidth, window.outerHeight];
    var restricted = [];
    var i = 2;

    while(i-- > 0){
        restricted[i] = minimum[i] > current[i] ? minimum[i] : current[i];
    }

    window.resizeTo(current[0], current[1]);
}

window.addEventListener('resize', resizeToMinimum, false)

function setConfirmUnload(on) {
    window.onbeforeunload = (on) ? unloadMessage : null;
}

function unloadMessage() {
    return "Are you sure you want to leave this page";
}

setConfirmUnload(false);