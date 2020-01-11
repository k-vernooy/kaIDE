// FOR ALL THE FUNCTIONS REGARDING THE MAIN TEXTAREA
function staticKeyHandler(event) {
    
    // var textarea = event.target;
    // console.log(event.key);

    if (event.key == "Tab")
        tabHandler(event);
}

function tabHandler(e) {

    var textarea = e.target;
    e.preventDefault();

    var pos = textarea.selectionStart;
    var insert = "    ";
    var target = textarea.value;
    
    textarea.value = [target.slice(0, pos), insert, target.slice(pos)].join('');
    setCaretPosition(textarea, pos + 4);
}

function dynamicKeyHandler(event) {
    var textarea = event.target;

    var posLineKeys = ["Delete", "Backspace", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]

    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete")
        updateNumbers(textarea);
    if (posLineKeys.includes(event.key))
        positionLine(textarea);
}

function positionLine(textarea) {
    var line = textarea.parentNode.children[2];
    var lineNum = cursorPosition(textarea)[0];

    var add = ((lineNum - 1) * 20) - 6;

    var printChar = '+';
    if ( add < 0 )
        printChar = "-"

    line.style.top = "calc(-200% " + printChar + " " + Math.abs(add) + "px)"
    line.style.top = add
}

function cursorPosition(textarea) {
    var line = textarea.value.substr(0, textarea.selectionStart).split("\n").length;
    var total = textarea.selectionStart;
    return [line, total];
}

$( ".textarea" ).on("keydown", function(event) {
    textarea = this;
    staticKeyHandler(event);

    setTimeout(function () {
        dynamicKeyHandler(event);
        renderCode(textarea);
    }, 0 )
});


function renderCode(textarea) {
    var code = textarea.parentNode.children[1].children[0].children[0];
    // console.log(code);
    code.innerHTML = textarea.value;
    updateH();
}

function updateH() {
    document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function updateNumbers(textarea) {
    var newNum = textarea.value.split("\n").length;
    var numbers = textarea.parentNode.parentNode.children[0];
    var exist = $(numbers).children('div').length;

    if (exist != newNum) {
        if (newNum > exist) {
            for (var i = 0; i < newNum - exist; i++) {
                addNumber(numbers);
            }
        }
        else {
            for (var i = 0; i < exist - newNum; i++) {
                removeNumber(numbers);
            }
        }
    }
}

function addNumber(numbers) {
    var exist = $(numbers).children('div').length;
    var ap = document.createElement("div");
    ap.className = "number";
    ap.innerHTML = exist + 1;
    numbers.appendChild(ap);
}

function removeNumber(numbers) {
    var exist = $(numbers).children('div').length;
    var re = numbers.getElementsByClassName("number")[exist - 1];
    re.parentNode.removeChild(re);
}

// function getSelectionText() {
//     var text = "";
//     if (window.getSelection) {
//         text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//         text = document.selection.createRange().text;
//     }
//     return text;
// }

function setCaretPosition(elem, caretPos) {

    if (elem != null) {
        if (elem.createTextRange) {
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

// $( "#inputArray" ).on("focus", ".inputEl", function(event){
//     brighten();
// });

// $( "#inputArray" ).on("focusout", ".inputEl", function(event){
//     darken();
// });

// $( "#inputArray" ).on("input", "input", function(event){
//     encodePreElements();
//     renderCont();
// });

$(document).ready(function() {
    document.getElementsByClassName("textarea")[0].focus();
});