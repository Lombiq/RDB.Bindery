/*
 * Contains all custom scripts for the RDB.Bindery theme.
 */

$(function () {
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