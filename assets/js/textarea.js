// FOR ALL THE FUNCTIONS REGARDING THE MAIN TEXTAREA

var numbers = document.getElementById("numbers");
var textarea = document.getElementById("inputText");
var bg = document.getElementById("textInput");
var focusTab = document.getElementsByClassName("focusTab")[0];
var bar = document.getElementById("blackLine")

function brighten() {
    bg.className += " bright";
    focusTab.className += " bright";
}

function darken() {
    bg.className = "";
    focusTab.className = "tab focusTab";
}

function getLineNumber() {
    var lines = textarea.value;
    var cursLineCount = lines.substr(0, textarea.selectionStart).split("\n").length;
    var topdist = 19;

    cursLineCount -= 1;
    topdist += cursLineCount * 20;
    bar.style.top = topdist + "px";

    var lineCount = lines.split(/\r\n|\r|\n/).length;
    var existingNumCount = document.getElementById("numbers").childElementCount;

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

if ( textarea.addEventListener ) {
    textarea.addEventListener('keydown',this.keyHandler,false);
} 
else if ( textarea.attachEvent ) {
    textarea.attachEvent('onkeydown',this.keyHandler) // IE
}

function keyHandler(e) {
    var TABKEY = 9;
    if(e.keyCode == TABKEY) {
        this.value += "    ";
        if(e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }
}