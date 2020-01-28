$(document).ready(function() {
    // custom select *
    $('.city-select select').select2();

    // mobile menu *
    $('.burger').click(function() {
        $('.main-nav').fadeToggle();
        $(this).toggleClass('active');
    });
    $(window).resize(function() {
        var width = $(window).width();
        if (width >= 992) {
            $('.main-nav').removeAttr('style');
        } else {
            $(document).click(function(event) {
                if ($(event.target).closest(".burger").length) return;
                if ($(event.target).closest(".main-nav").length) return;
                $(".main-nav").fadeOut();
                event.stopPropagation();
            });
        }
    });









});
