function setConfirmUnload(on) {
    window.onbeforeunload = (on) ? unloadMessage : null;
}

function unloadMessage() {
    return "Are you sure you want to leave this page";
}

setConfirmUnload(false);