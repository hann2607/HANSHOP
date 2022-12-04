// javascript 
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos <= document.getElementById("header-container").offsetHeight) {
        document.getElementById("header-container").style.position = "relative";
    } else if (prevScrollpos > document.getElementById("header-container").offsetHeight) {
        document.getElementById("header-container").style.position = "fixed";
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header-container").style.top = "0";
        } else {
            document.getElementById("header-container").style.top = "-" + document.getElementById("header-container").offsetHeight + "px";
        }
    }
    prevScrollpos = currentScrollPos;
}
