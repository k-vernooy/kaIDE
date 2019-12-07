// FOR ALL THE FUNCTIONS REGARDING THE MAIN TEXTAREA

var numbers = document.getElementById("numbers");
var textarea = document.getElementById("inputText");
var bg = document.getElementById("textInput");
var focusTab = document.getElementsByClassName("focusTab")[0];
var bar = document.getElementById("blackLine")

function brighten() {
    bg.className += " bright";
    document.getElementsByClassName("focusTab")[0].className += " bright";
}

function darken() {
    bg.className = "";
    document.getElementsByClassName("focusTab")[0].className = "tab focusTab";
}

function getLineNumber() {

// NONE OF THIS WILL WORK ANYMORE, 
// WE SWITCHED TO A BETTER CONTENTEDITABLE DIV

    // var lines = document.getElementById('inputText').value;
    // var cursLineCount = lines.substr(0, document.getElementById('inputText').selectionStart).split("\n").length;

    // cursLineCount -= 1;
    // console.log("cursor on line " + (cursLineCount + 1) )
    
    // var topdist = 19;
    // topdist += cursLineCount * 20;
    // bar.style.top = topdist + "px";

    // var lineCount = lines.split(/\r\n|\r|\n/).length;
    // var existingNumCount = document.getElementById("numbers").childElementCount;

    // if ( existingNumCount >= lineCount ) {
    //     for ( var i = 0; i < existingNumCount - lineCount; i++ ) {
    //           numbers.removeChild(numbers.lastChild);
    //     }
    // }
    // else {
    //     for ( var i = existingNumCount; i < lineCount; i++ ) {
    //         numbers.innerHTML += "<div class='number'>" + ( i + 1 ) + "</div>"
    //     }
    // }
}

// if ( textarea.addEventListener ) {
//     textarea.addEventListener('keydown', this.keyHandler, true );
// } 

function keyHandler(event) {
    // console.log("triggered")
    if ( event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "ArrowDown" ||  event.key == "ArrowUp" || event.key == "Enter") {
        switchLine(event.key);
    }

}

function addNumber() {
    var exist = $("#numbers > div").length;
    var ap = document.createElement("div");
    ap.className = "number";
    ap.innerHTML = exist + 1;

    document.getElementById("numbers").appendChild(ap);
}

function addInputEl() {
    var div = document.createElement('div');
    var input = document.createElement('input');
    var size = document.getElementsByClassName("inputEl").length;

    input.className = "inputEl";
    input.id = (size + 1) + "-i";
    input.type = "text";
    input.keydown = function(event){keyHandler(event)}; 
    div.id = (size + 1 ) + "-r";
    div.className = "row";


    document.getElementById("inputArray").appendChild(input);
    document.getElementById("render").appendChild(div);

    var num = -18 * (size + 1);
    document.getElementById("render").style.top = num + "px";

    document.getElementById("inputArray").childNodes[document.getElementById("inputArray").childNodes.length - 1].focus();
    focusInput();

    addNumber();
}

function removeInputEl() {
}


function switchLine(key) {
    var size = document.getElementsByClassName("inputEl").length;
    var pos = document.activeElement.id.split("-")[0];
    if ( key == "Enter" && size == pos ) {
        addInputEl();
    }
    console.log("size: " + size);
    console.log("pos: " + pos);
}

function focusInput() {
    var id = document.activeElement.id;
    $('#render .dark').removeClass("dark");
    document.getElementById(id.split('-')[0] + "-r").classList.add("dark");
}

$( "#inputArray" ).on("keydown", ".inputEl", function(event){
    keyHandler(event);
});

$( "#inputArray" ).on("focus", ".inputEl", function(event){
    focusInput();
});