// FOR ALL THE FUNCTIONS REGARDING THE MAIN TEXTAREA
function staticKeyHandler(event) {
    
    var textarea = event.target;

    if (event.key == "Tab") {
        event.preventDefault();
    }
}

function dynamicKeyHandler(event) {
    var textarea = event.target;

    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete") {
        updateNumbers(textarea);
    }
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
    console.log(code);
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

// function setCaretPosition(elemId, caretPos) {
//     var elem = document.getElementById(elemId);

//     if(elem != null) {
//         if(elem.createTextRange) {
//             var range = elem.createTextRange();
//             range.move('character', caretPos);
//             range.select();
//         }
//         else {
//             if(elem.selectionStart) {
//                 elem.focus();
//                 elem.setSelectionRange(caretPos, caretPos);
//             }
//             else
//                 elem.focus();
//         }
//     }
// }

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