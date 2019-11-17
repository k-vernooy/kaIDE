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
    // console.log("FIREEEEEE")

    var lines = document.getElementById('inputText').value;
    var cursLineCount = lines.substr(0, document.getElementById('inputText').selectionStart).split("\n").length;

    cursLineCount -= 1;
    console.log("cursor on line " + (cursLineCount + 1) )
    
    var topdist = 19;
    topdist += cursLineCount * 20;
    bar.style.top = topdist + "px";

    var lineCount = lines.split(/\r\n|\r|\n/).length;
    var existingNumCount = document.getElementById("numbers").childElementCount;

    if ( existingNumCount >= lineCount ) {
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

// if ( textarea.addEventListener ) {
//     textarea.addEventListener('keydown', this.keyHandler, true );
// } 

$(document).on("keyup", function (event) {
    var key = event.keyCode;
    $('#inputText').trigger('change');
        if ( (key >= 37 && key <= 40) || key == 13 || key == 8 ) {
        getLineNumber();
    }

 });