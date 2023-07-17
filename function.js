const STYLESHEET_KEY = "stylesheet";


function toggleStyleSheet(){

    var styleElement = document.getElementById("mainStyleSheet");


    var filename = styleElement.getAttribute("href");

    if (styleElement.getAttribute("href") == "file.css") {

    styleElement.setAttribute("href", "file2.css");
    localStorage.setItem(STYLESHEET_KEY, "file2.css");

}else{
    styleElement.setAttribute("href", "file.css");
    localStorage.setItem(STYLESHEET_KEY, "file.css");
}

}


window.onload = function(){

    var styleSheetValue = localStorage.getItem(STYLESHEET_KEY) || "file.css";
    var styleElement = document.getElementById("mainStyleSheet");
    styleElement.setAttribute("href", styleSheetValue); 
}


