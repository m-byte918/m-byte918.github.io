$(document).ready(function() {
    $(".dropdown > a").mouseenter(function() {
        setBackgroundColor($(this), "#35393d");
    });
    $(".dropdown > a").mouseleave(function() {
        setBackgroundColor($(this), "#42464c");
    });
    $(".dropdown-content").mouseenter(function() {
        setBackgroundColor($(this).siblings("a"), "#35393d");
    });
    $(".dropdown-content").mouseleave(function() {
        setBackgroundColor($(this).siblings("a"), "#42464c");
    });
    function setBackgroundColor(elem, color) {
        if (!elem.hasClass("location"))
            elem.css("background-color", color);
    }
});