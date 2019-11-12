// FOR ALL THE FUNCTIONS REGARDING THE MAIN TEXTAREA

function brighten() {
    document.getElementById("textInput").className += " bright";
    document.getElementsByClassName("focusTab")[0].className += " bright";
}

function darken() {
    document.getElementById("textInput").className = "";
    document.getElementsByClassName("focusTab")[0].className = "tab focusTab";
}

function getLineNumber(textarea) {
    var lines = textarea.value;

    var cursLineCount = lines.substr(0, textarea.selectionStart).split("\n").length;
    var bar = document.getElementById("blackLine")
    var topdist = 19;

    cursLineCount -= 1;
    topdist += cursLineCount * 20;

    bar.style.top = topdist + "px";

    var lineCount = lines.split(/\r\n|\r|\n/).length;
    var existingNumCount = document.getElementById("numbers").childElementCount;

    var numbers = document.getElementById("numbers");

    if ( existingNumCount > lineCount ) {
        for ( var i = 0; i < existingNumCount - lineCount; i++ ) {
              numbers.removeChild(numbers.lastChild);
        }
    }
    else {
        for ( var i = existingNumCount; i < lineCount; i++ ) {
            numbers.innerHTML += "<div class='number'>" + ( i + 1 ) + "</div>"
        }
    }
}