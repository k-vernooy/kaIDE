function showChildren(folder) {


    var childrenDiv = null;
    
    for (var i = 0; i < folder.parentNode.childNodes.length; i++) {
        if (folder.parentNode.childNodes[i].className == "children") {
            childrenDiv = folder.parentNode.childNodes[i];
            console.log(childrenDiv)
            break;
        }        
    }

    if ( folder.classList.contains("open") ) {
        console.log('closing folder')
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
    // If Control or Command key is pressed and the S key is pressed
    // run save function. 83 is the key code for S.
    if((event.ctrlKey || event.metaKey) && event.which == 83) {
        // Save Function
        event.preventDefault();
        alert("save file")
        return false;
    }
}
);