window.addEventListener('load', function () {

    //preloader script
    let preloaderConteiner = document.querySelector('.preloader-conteiner');
    let app = document.querySelector('.app')
    setTimeout(() => {
        preloaderConteiner.classList.add('hidePreloader')
        app.style.display = "block"
    }, 200)


});

$(function () {
    $('.reviews-slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: false,
        slidesToScroll: 1,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '30%',
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    centerPadding: '0',
                }
            },

        ]
    });


    $('.team-sec__slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: false,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 3,
        centerMode: false,
        centerPadding: '0%',
        autoplay: false,

        prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    $('.burger-meny').on('click', function () {
        $('.header').toggleClass('header-mob-active')
    })

});

//header style
$(document).scroll(function (e) {
    $(window).scrollTop() > 50 ? $('header').addClass('hader-fixed') : $('header').removeClass('hader-fixed');
});

//link
jQuery(function ($) {
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
        var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
        if (theHref && location.href.replace(/#.*/, '') != theHref) return;
        var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
        if (!$target.length) return;
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function () {
            window.location.hash = hash;
        });
    });
});


window.addEventListener('load', function () {

    //review  slider height elements
    function serviceDownSliderMaxHeight() {
        // Получаем все слайды галереи
        let slides = document.getElementsByClassName('reviews-slider__element-wrapper');
        if (slides.length > 0) {
            // Переменная для хранения самой большой высоты
            let maxHeight = 0;

            // Находим самую большую высоту
            for (let i = 0; i < slides.length; i++) {
                if (slides[i].offsetHeight > maxHeight) {
                    maxHeight = slides[i].offsetHeight;
                }
            }

            // Устанавливаем высоту для всех слайдов
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.height = maxHeight + 'px';
            }
        }
    }
    serviceDownSliderMaxHeight()

}, false);



//infinity move
function Marquee(selector, speed, direction) {
    let parentSelector = document.querySelector(selector);

    if (parentSelector) {
        if (!parentSelector) {
            console.error(`Element with selector ${selector} not found.`);
            return;
        }

        if (direction == 'left') {
            let clone = parentSelector.innerHTML;
            parentSelector.insertAdjacentHTML('beforeend', clone);

            let firstElement = parentSelector.querySelector(':first-child'); // Получаем первый элемент в клоне

            let i = 0;

            let intervalId = setInterval(function () {
                firstElement.style.marginLeft = `-${i}px`;
                if (i > firstElement.clientWidth) {
                    i = 0;
                }
                i += speed;
            }, 1000 / 120); // 60 кадров в секунду (примерно)

            // Опционально, чтобы остановить анимацию после загрузки страницы
            window.addEventListener('load', function () {
                clearInterval(intervalId);
            });
        }
        else {
            let clone = parentSelector.innerHTML;
            parentSelector.insertAdjacentHTML('afterbegin', clone);


            let firstElement = parentSelector.querySelector('.marquee__row:nth-child(2)'); // Получаем первый элемент в клоне

            let i = 0;
            console.log(clone)
            let intervalId = setInterval(function () {
                firstElement.style.marginRight = `-${i}px`;
                if (i > firstElement.clientWidth) {
                    i = 0;
                }
                i += speed;
            }, 1000 / 120); // 60 кадров в секунду (примерно)

            // Опционально, чтобы остановить анимацию после загрузки страницы
            window.addEventListener('load', function () {
                clearInterval(intervalId);
            });
        }
    }

}

// Вызываем Marquee после полной загрузки страницы
window.addEventListener('load', function () {
    Marquee('.rov-move__right .marquee3', 0.4, 'right');
});



window.addEventListener('load', function () {


    //scroll animations
    function animateController() {
        new Skroll({
            mobile: true,
        })
            .add(".home-front-sec__title", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".home-front-sec__text", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".home-front-sec__btn-wrapper", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".home-about-sec__img", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".home-about-sec__text", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".adv", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".home-seraf-sec__banner", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".home-seraf-sec__tools-row", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".home-seraf-sec__save-time-element", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".home-service-sec__info", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".home-service-sec__img-wrapper", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".home-seraf-sec__logo", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".home-seraf-sec__title", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".home-seraf-sec__subtitle", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".home-seraf-sec__btn-wrapper", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".about-page-about-sec__box-contetn", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".about-front__title", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".about-front__subtitle", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })

            .add(".about-front__img", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })





            .init()
            .recalcPosition()
    }

    animateController()

});



