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