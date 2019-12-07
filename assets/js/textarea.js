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
}

function addNumber() {
    var exist = $("#numbers > div").length;
    var ap = document.createElement("div");
    ap.className = "number";
    ap.innerHTML = exist + 1;

    document.getElementById("numbers").appendChild(ap);
}

function focusNextLine() {
    // console.log(;

    document.getElementById((parseInt(document.activeElement.id.split("-")[0]) + 1) + "-i").focus();
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

    var num = -18 * (size + 1);
    document.getElementById("render").style.top = num + "px";

    focusNextLine();
    focusInput();

    addNumber();

    //remove placeholder
    document.getElementById("1-i").placeholder = ""
}

function removeInputEl() {
}

function focusInput() {
    var id = document.activeElement.id;
    $('#render .dark').removeClass("dark");
    document.getElementById(id.split('-')[0] + "-r").classList.add("dark");
}

function renderCont() {
    var el = document.activeElement;
    var raw = document.getElementById(el.id.split('-')[0] + "-r").childNodes[0]
    raw.innerHTML = el.value;
}

$( "#inputArray" ).on("keydown", ".inputEl", function(event){
    keyHandler(event);
});

$( "#inputArray" ).on("focus", ".inputEl", function(event){
    focusInput();
});

$( "#inputArray" ).on("input", "input", function(event){
    renderCont();
});

focusInput();