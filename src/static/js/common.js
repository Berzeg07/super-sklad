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

    // Area skider *
    var bannerSlider = new Swiper('.area__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Phone-mask
    $(".phone-inp").mask("7 (999) 999-99-99");

    // Area maps *
    var show = $('.rent-price');
    var showTop = show.offset().top;
    var newMap = document.querySelector('.new-map');
    $(window).bind('scroll', function() {
        var windowTop = $(this).scrollTop();
        if (windowTop > showTop) {
            $(window).unbind('scroll');
            newMap.setAttribute("src", "https://api-maps.yandex.ru/2.1/?lang=ru_RU");
            setTimeout(function() {
                ymaps.ready(init);

                function init() {
                    var center = [55.744743, 37.513215];
                    var myMap = new ymaps.Map('map1', {
                        center: center,
                        controls: [],
                        zoom: 16
                    }, {
                        searchControlProvider: 'yandex#search'

                    });

                    myMap.behaviors.disable('scrollZoom');

                    var myPlacemark = new ymaps.Placemark(center, {
                        // Свойства.
                        // Содержимое иконки, балуна и хинта.
                        balloonContent: 'Промышленный проезд, 3',
                        hintContent: 'Промышленный проезд, 3'
                    }, {
                        // Опции.
                        iconLayout: 'default#image',
                        // iconImageHref: 'img/map-ic.png',
                        iconImageSize: [42, 42]
                        // preset: 'twirl#violetIcon'
                    });

                    myMap.geoObjects.add(myPlacemark);

                    var center2 = [55.861883, 37.547782];
                    var myMap2 = new ymaps.Map('map2', {
                        center: center2,
                        controls: [],
                        zoom: 16
                    }, {
                        searchControlProvider: 'yandex#search'

                    });

                    myMap2.behaviors.disable('scrollZoom');

                    var myPlacemark2 = new ymaps.Placemark(center2, {
                        // Свойства.
                        // Содержимое иконки, балуна и хинта.
                        balloonContent: 'Дмитровское шоссе, 83А',
                        hintContent: 'Дмитровское шоссе, 83А'
                    }, {
                        // Опции.
                        iconLayout: 'default#image',
                        // iconImageHref: 'img/map-ic.png',
                        iconImageSize: [42, 42]
                        // preset: 'twirl#violetIcon'
                    });

                    myMap2.geoObjects.add(myPlacemark2);
                    // ================================
                    var center3 = [55.603736, 37.460933];
                    var myMap3 = new ymaps.Map('map3', {
                        center: center3,
                        controls: [],
                        zoom: 16
                    }, {
                        searchControlProvider: 'yandex#search'

                    });

                    myMap3.behaviors.disable('scrollZoom');

                    var myPlacemark3 = new ymaps.Placemark(center3, {
                        // Свойства.
                        // Содержимое иконки, балуна и хинта.
                        balloonContent: 'Адмирала Корнилова вл. 5',
                        hintContent: 'Адмирала Корнилова вл. 5'
                    }, {
                        // Опции.
                        iconLayout: 'default#image',
                        // iconImageHref: 'img/map-ic.png',
                        iconImageSize: [42, 42]
                        // preset: 'twirl#violetIcon'
                    });

                    myMap3.geoObjects.add(myPlacemark3);
                    // ================================
                    var center4 = [55.851798, 37.576205];
                    var myMap4 = new ymaps.Map('map4', {
                        center: center4,
                        controls: [],
                        zoom: 16
                    }, {
                        searchControlProvider: 'yandex#search'

                    });

                    myMap4.behaviors.disable('scrollZoom');

                    var myPlacemark4 = new ymaps.Placemark(center4, {
                        // Свойства.
                        // Содержимое иконки, балуна и хинта.
                        balloonContent: 'Нововладыкинский проезд, 8',
                        hintContent: 'Нововладыкинский проезд, 8'
                    }, {
                        // Опции.
                        iconLayout: 'default#image',
                        // iconImageHref: 'img/map-ic.png',
                        iconImageSize: [42, 42]
                        // preset: 'twirl#violetIcon'
                    });

                    myMap4.geoObjects.add(myPlacemark4);
                    // ================================
                    var center5 = [55.755814, 37.617635];
                    var myMap5 = new ymaps.Map('mainMap', {
                        center: center5,
                        controls: [],
                        zoom: 8
                    }, {
                        searchControlProvider: 'yandex#search'

                    });

                    myMap5.behaviors.disable('scrollZoom');

                    var myPlacemark5 = new ymaps.Placemark(center5, {
                        // Свойства.
                        // Содержимое иконки, балуна и хинта.
                        balloonContent: 'Москва',
                        hintContent: 'Москва'
                    }, {
                        // Опции.
                        iconLayout: 'default#image',
                        // iconImageHref: 'img/map-ic.png',
                        iconImageSize: [42, 42]
                        // preset: 'twirl#violetIcon'
                    });

                    myMap5.geoObjects.add(myPlacemark5);
                }
            }, 500);
            return;
        }
    })









});
