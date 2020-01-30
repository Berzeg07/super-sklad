$(document).ready(function() {
    // custom select *
    $('.custom-select select').select2();

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

    // main slider *
    var swiper = null;
    var initSwiper = function(simulateTouch) {
        if (swiper) {
            swiper.destroy();
        }
        var bannerSlider = new Swiper('.banner-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            simulateTouch: simulateTouch,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    };
    var changeMedia = function(screen) {
        if (screen.matches) {
            initSwiper(true);
        } else {
            initSwiper(false);
        }
    };
    var screen = window.matchMedia("(max-width: 1279px)");
    changeMedia(screen);
    screen.addListener(changeMedia);

    // types slider *
    var bannerSlider = new Swiper('.container__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });









});
