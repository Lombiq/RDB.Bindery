/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/



; (function ($, window, document, undefined) {
    $.fn.doubleTapToGo = function (params) {
        if (!('ontouchstart' in window) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;

        this.each(function () {
            var curItem = false;

            $(this).on('click', function (e) {
                var item = $(this);
                if (item[0] != curItem[0]) {
                    e.preventDefault();
                    curItem = item;
                }
            });

            $(document).on('click touchstart MSPointerDown', function (e) {
                var resetItem = true,
					parents = $(e.target).parents();

                for (var i = 0; i < parents.length; i++)
                    if (parents[i] == curItem[0])
                        resetItem = false;

                if (resetItem)
                    curItem = false;
            });
        });
        return this;
    };
})(jQuery, window, document);
/*
 * Contains all custom scripts for the RDB.Bindery theme.
 */

$(function () {
    $("#nav li:has(ul)").doubleTapToGo();

    $("#navigation-toggle").bind("click", function () {
        if ($(".zone-navigation").hasClass("open")) {
            $(".zone-navigation").removeClass("open");
            $(this).removeClass("open");
        }
        else {
            $(".zone-navigation").addClass("open");
            $(this).addClass("open");
        }
    });
});