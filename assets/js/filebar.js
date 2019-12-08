function showChildren(folder) {
    var childrenDiv = null;
    
    for (var i = 0; i < folder.parentNode.childNodes.length; i++) {
        if (folder.parentNode.childNodes[i].className == "children") {
            childrenDiv = folder.parentNode.childNodes[i];
            break;
        }        
    }

    if ( folder.classList.contains("open") ) {
        if ( childrenDiv != null ) {
            childrenDiv.style.display = "none";
        }
        folder.className = "cont";
    }
    else {
        folder.className += " open";

        if ( childrenDiv != null ) {
            childrenDiv.style.display = "block";
        }
    }
}

$(document).keydown(function(event) {
    if ((event.ctrlKey || event.metaKey) && event.which == 83) {
        event.preventDefault();
        alert("save file")
        return false;
    }
});