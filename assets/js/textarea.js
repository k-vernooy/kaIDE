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

function keyHandler(event) {
    var size = document.getElementsByClassName("inputEl").length;
    var pos = document.activeElement.id.split("-")[0];

    if ( event.key == "Enter" ) {
        addInputEl();
    }
    else if ( event.key == "ArrowDown") {
        focusNextLine();
    }
    else if ( event.key == "ArrowUp" ) {
        focusPreviousLine();
    }
    else if ( event.key == "ArrowRight" ) {
        focusRightLine(event);
    }
    else if ( event.key == "Backspace" || event.key == "ArrowLeft" ) {
        focusLeftLine(event);
    }
}

function updateIdList() {
    for ( var i = 0; i < document.getElementsByClassName("inputEl").length; i++  ) {
        document.getElementsByClassName("inputEl")[i].id = (i + 1) + "-i";
    }

    for ( var i = 0; i < document.getElementsByClassName("row").length; i++  ) {
        document.getElementsByClassName("row")[i].id = (i + 1) + "-r";
    }
}

function addNumber() {
    var exist = $("#numbers > div").length;
    var ap = document.createElement("div");
    ap.className = "number";
    ap.innerHTML = exist + 1;

    document.getElementById("numbers").appendChild(ap);
}

function removeNumber() {
    var exist = $("#numbers > div").length;
    var re = document.getElementsByClassName("number")[exist - 1];
    re.parentNode.removeChild(re);
}

function focusLeftLine(event) {

    // checks to see if we need to focus 
    // the previous line due to a movement left of the cursor
    if (document.activeElement.selectionStart == 0) {
        event.preventDefault();
        if (document.activeElement.id.split("-")[0] != 1 && event.key == "Backspace") {
            removeInputEl(document.activeElement.id.split("-")[0])
        }
        else {
            focusPreviousLine();
        }
    };
}

function focusRightLine(event) {
    if (document.activeElement.selectionStart == document.activeElement.value.length ) {
        event.preventDefault();
        focusNextLine();
        // if (document.activeElement.id.split("-")[0] != 1 && event.key == "Backspace") {
        //     removeInputEl(document.activeElement.id.split("-")[0])
        // }
        // else {
        //     focusPreviousLine();
        // }
    }
}

function focusPreviousLine() {
    var line = document.activeElement.id.split("-")[0] - 1;
    if ( line != 0 ) {
        document.getElementById(line + "-i").focus();
    }
}

function focusNextLine() {
    if ( document.activeElement.id.split("-")[0] != document.getElementById("inputArray").childElementCount) {
        document.getElementById((parseInt(document.activeElement.id.split("-")[0]) + 1) + "-i").focus();
    };
}

function moveRenderDiv() {
    var size = document.getElementsByClassName("inputEl").length;
    var num = -18 * (size);
    document.getElementById("render").style.top = num + "px";
}

function addInputEl() {
    var div = document.createElement('div');
    var raw = document.createElement('span');
    var pretty = document.createElement('div');
    var input = document.createElement('input');
    var size = document.getElementsByClassName("inputEl").length;

    pretty.className = "pretty";
    raw.className = "raw";
    input.className = "inputEl";
    input.id = (size + 1) + "-i";
    input.type = "text";
    input.keydown = function(event){keyHandler(event)}; 
    div.id = (size + 1 ) + "-r";
    div.className = "row";
    div.appendChild(raw);
    div.appendChild(pretty);

    document.getElementById("inputArray").appendChild(input);
    document.getElementById("render").appendChild(div);

    moveRenderDiv();
    focusNextLine();
    addNumber();

    document.getElementById("1-i").placeholder = ""
}

function removeInputEl(num) {
    var input = document.getElementById(num + "-i");
    var raw = document.getElementById(num + "-r");
    var val = input.value;
    var len = document.getElementById((num - 1) + "-i").value.length;
    
    document.getElementById((num - 1) + "-i").value += val;
    document.getElementById((num - 1) + "-r").childNodes[0].innerHTML += val;
    
    setCaretPosition(((num - 1) + "-i"), len)
    input.parentNode.removeChild(input);
    raw.parentNode.removeChild(raw);

    updateIdList();
    moveRenderDiv();
    removeNumber();
    
    if ( num != 1 ) {
        document.getElementById((num - 1) + "-i" ).focus();
    }
}

function renderCont() {
    var el = document.activeElement;
    var raw = document.getElementById(el.id.split('-')[0] + "-r").childNodes[0]
    raw.innerHTML = el.value;

    renderFullCode();
}

function renderFullCode() {
    var inputs = document.getElementById("inputArray");
    var code = document.getElementById("code");
    code.innerHTML = "";

    for ( var i = 0; i < inputs.getElementsByClassName("inputEl").length; i++ ) {
        code.innerHTML += inputs.getElementsByClassName("inputEl")[i].value;
        console.log( inputs.getElementsByClassName("inputEl")[i]);
        code.innerHTML += "\n";
    }

    updateH();
}

function setCaretPosition(elemId, caretPos) {
    var elem = document.getElementById(elemId);

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}


$( "#inputArray" ).on("keydown", ".inputEl", function(event){
    keyHandler(event);
});

$( "#inputArray" ).on("focus", ".inputEl", function(event){
    brighten();
    
});

$( "#inputArray" ).on("focusout", ".inputEl", function(event){
    darken();
});

$( "#inputArray" ).on("input", "input", function(event){
    renderCont();
});

$(document).ready(function() {
    document.getElementById("1-i").focus();
});

function updateH() {
    document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
    });
}