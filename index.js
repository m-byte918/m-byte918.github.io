$(document).ready(function() {

    /** Dropdown menus **/
    
    $(".dropdown > a").mouseenter(function() {
        setStyle($(this), "#f52549", "bold");
    });
    $(".dropdown > a").mouseleave(function() {
        setStyle($(this), "#f2f2f2", "normal");
    });
    $(".dropdown-content").mouseenter(function() {
        setStyle($(this).siblings("a"), "#f52549", "bold");
    });
    $(".dropdown-content").mouseleave(function() {
        setStyle($(this).siblings("a"), "#f2f2f2", "normal");
    });

    $(".dropdown-content").children("a").each(function(index, elem) {
        $(elem).css("transition-delay", `${index * 0.03}s`);
    });

    function setStyle(elem, color, fontWeight) {
        if (elem.hasClass("location"))
            return;
        elem.css({
            color: color,
            fontWeight: fontWeight
        });
    }
});
