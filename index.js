$(document).ready(function() {

    /** Dropdown menus **/

    /*function getPageIndex(elem) {
        const elemIndex = elem.index();
        let i = -1;
        $("#pages").children(".dropdown").each(function(index, e) {
            if ($(e).index() === elemIndex) {
                i = index;
                return false; // break
            }
        });
        return i;
    }*/

    $(".dropdown > a").mouseenter(function() {
        const self = $(this);
        setTransition(self, 1.09, "ease-in");
        setFontStyle(self, "f52549", "bold");
    });
    $(".dropdown > a").mouseleave(function() {
        const self = $(this);
        setTransition(self, 1, "ease-out");
        setFontStyle(self, "f2f2f2", "normal");
    });
    $(".dropdown-content").mouseenter(function() {
        const sibling = $(this).siblings("a");
        setTransition(sibling, 1.09, "ease-in");
        setFontStyle(sibling, "f52549", "bold");
    });
    $(".dropdown-content").mouseleave(function() {
        const sibling = $(this).siblings("a");
        setTransition(sibling, 1, "ease-out");
        setFontStyle(sibling, "f2f2f2", "normal");
    });

    $(".dropdown-content").children("a").each(function(index, elem) {
        $(elem).css("transition-delay", `${index * 0.03}s`);
    });

    function setTransition(elem, scale, timing) {
        elem.css({
            transform: `scale(${scale})`,
            transition: "transform 0.1s " + timing
        });
    }

    function setFontStyle(elem, color, fontWeight) {
        if (elem.hasClass("location"))
            return;
        elem.css({
            color: '#' + color,
            fontWeight: fontWeight
        });
    }

    /*function rand(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateStars(count) {
        let str = "";
        const width = $(document).width();
        const height = $(document).height();
        for (let i = 0; i < count; ++i) {
            str += `${rand(0, width)}px ${rand(0, height)}px #FFF,`;
        }
        return str;
    }

    console.log(generateStars(700));
    console.log(generateStars(200));
    console.log(generateStars(100));*/
});
