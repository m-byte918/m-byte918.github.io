$(document).ready(function() {

    // Dropdown menus
    $(".dropdown > a").mouseenter(function() {
        setDropdownColor($(this), "#35393d");
    });
    $(".dropdown > a").mouseleave(function() {
        setDropdownColor($(this), "#42464c");
    });
    $(".dropdown-content").mouseenter(function() {
        setDropdownColor($(this).siblings("a"), "#35393d");
    });
    $(".dropdown-content").mouseleave(function() {
        setDropdownColor($(this).siblings("a"), "#42464c");
    });
    function setDropdownColor(elem, color) {
        if (!elem.hasClass("location"))
            elem.css("background-color", color);
    }

    // Star background
    const starColor = "#FFF";
    const starMinSize = 1;
    const starMaxSize = 3;
    const starBBox = {
        minx: "0vw",
        miny: "0vh",
        maxx: "100vw",
        maxy: "100vh"
    };
    // animDelay = size * 50
    
    // FORMAT SCROLL BAR
});