$(document).ready(function () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
});


$(window).load(function() {

    var viewportWidth = $(window).width();
    if (viewportWidth < 767) {
            $(".panel-collapse").addClass("in");
    }

    $(window).resize(function () {

        if (viewportWidth < 767) {
            $(".panel-collapse").addClass("in");
        }
    });
});
