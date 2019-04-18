/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('Hello from main.js!');

function modalSuccess() {

    var btn = document.querySelectorAll("a.btn__modal");
    var modal = document.body.querySelector('div.modal__wrap');
    var close = modal.parentElement.querySelector('div.close');
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            modal.classList.add("active");
            close.onclick = function () {
                modal.classList.remove("active");
            };
        });
    }
}

if ($("div.modal__wrap").length > 0) {
    modalSuccess();
}

function recovery__success() {
    $('.recovery__success').on('click', function () {
        $(this).parent().toggle('active');
        $('.modal__recovery__success').show().css('display', 'flex');
        $('.modal__recovery__success').find('a.button').on('click', function () {
            $('.modal__wrap').removeClass('active');
        });
    });
}

recovery__success();

function modal__del__messege() {
    $('.del__messege').on('click', function () {
        $('.del__messege__modal').addClass('active');
        $('.modal__content').find('.close').on('click', function () {
            $('.modal__wrap').removeClass('active');
        });
        $('.modal__content').find('.close__link').on('click', function () {
            $('.modal__wrap').removeClass('active');
        });
    });
}

modal__del__messege();

function tabsRegistration() {
    $('.log__wrap__tabs__row .button').on('click', function () {
        $('.log__wrap__tabs__row .button').removeClass('active');
        $(this).addClass('active');
        if ($('.log__wrap__tabs__row .button.email').hasClass('active')) {
            $('.form.phone').removeClass('open');
            $('.form.email').addClass('open');
        }
        if ($('.log__wrap__tabs__row .button.phone').hasClass('active')) {
            $('.form.email').removeClass('open');
            $('.form.phone').addClass('open');
        }
    });
}

tabsRegistration();

function customSelect() {
    $('.custom__select').styler();
}

$('.my__lot').styler({
    selectPlaceholder: 'Другие действия'
});

customSelect();

function checkboxStyle() {
    // wrap the input in a new div that we can style to hide the default checkboxes
    $(".check").wrap("<div class='new'></div>");

    // add a span after each checkbox that we can style as our new checkboxes
    $('input.custom__checkbox[type="checkbox"]').after('<span class="check-box"></span>');

    $('input.custom__checkbox[type="radio"]').after('<span class="check-box"></span>');
}

checkboxStyle();

//slider
function slider__lot__page() {
    $('.slider__header').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider__header',
        dots: true,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                asNavFor: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false
            }
        }]
    });
}

slider__lot__page();
$('.recommended__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider__header',
    dots: false,
    arrows: true,
    centerMode: false,
    focusOnSelect: false,
    responsive: [{
        breakpoint: 1160,
        settings: {
            dots: false,
            arrows: false
        }
    }, {
        breakpoint: 960,
        settings: {
            slidesToShow: 3,
            dots: false,
            arrows: false
        }
    }, {
        breakpoint: 760,
        settings: {
            slidesToShow: 2,
            dots: false,
            arrows: false
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            dots: false,
            arrows: true
        }
    }]
});

$('.slider__phone__box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 2000
});

$('.whywe').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: false,
    responsive: [{
        breakpoint: 960,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: false
        }
    }, {
        breakpoint: 770,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: false
        }
    }, {
        breakpoint: 560,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: false
        }
    }]
});

$('.info__wrap').find('i').on('click', function (e) {
    $('.info__desc').toggleClass('active');
    $(document).mouseup(function (e) {
        var container = $('.info__wrap').find('i');
        if (container.has(e.target).length === 0) {
            $('.info__desc').removeClass('active');
        }
    });
});

if ($('#simple-bar__table').length > 0) {
    var myElement = document.getElementById('simple-bar__table');
    new SimpleBar(myElement, { autoHide: true });
}
if ($('#simple-bar__dialog').length > 0) {
    var myElement = document.getElementById('simple-bar__dialog');
    new SimpleBar(myElement, { autoHide: true });
}
if ($('#simple-bar__content').length > 0) {
    var myElement = document.getElementById('simple-bar__content');
    new SimpleBar(myElement, { autoHide: true });
}
if ($('#simple-bar__balance__table').length > 0) {
    var myElement = document.getElementById('simple-bar__balance__table');
    new SimpleBar(myElement, { autoHide: true });
}

function nav__account__tabs() {
    $('.nav__account__wrap__tab ').on('click', function () {
        $('.nav__account__wrap__tab ').removeClass('active');
        $(this).addClass('active');
    });
}

nav__account__tabs();

$('.messege__filter a').on('click', function () {
    $('.messege__filter a').removeClass('active');
    $(this).addClass('active');
});

$('.setting__dialog__btn').on('click', function () {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $('.setting__dialog__naw').addClass('open');
    } else {
        $('.setting__dialog__naw').removeClass('open');
    }
});

$('.balance__wrap__item__btn').find('.button').on('click', function () {
    $('.balance__wrap__item__btn').find('.button').removeClass('active');
    $(this).addClass('active');
});

$('.faq__page__wrap__item__head').on('click', function () {

    if ($(this).parent('.faq__page__wrap__item').find('.faq__page__wrap__item__body').hasClass('open')) {
        $(this).parent('.faq__page__wrap__item').find('.faq__page__wrap__item__body').removeClass('open');
        $('.faq__page__wrap__item__head').removeClass('open');
    } else {
        $('.faq__page__wrap__item__body').removeClass('open');
        $('.faq__page__wrap__item__head').removeClass('open');
        $(this).addClass('open');
        $(this).parent('.faq__page__wrap__item').find('.faq__page__wrap__item__body').addClass('open');
    }
});

function navMobileBar() {
    $('.header__naw__mobile__btn').on('click', function () {
        $('.header__naw__mobile__bar').addClass('open');
        $('body').addClass('no__scroll');
        if ($('.header__naw__mobile__bar').hasClass('open')) {
            $(this).parent().find('.header__naw__mobile__bar').find('.close__btn').on('click', function () {
                $(this).parent('.header__naw__mobile__bar').removeClass('open');
                $('body').removeClass('no__scroll');
            });
        }
    });
}

navMobileBar();

function mobile__filter() {
    $('.btn__mobile__filter').on('click', function () {
        $(this).parent().find('.filter__mobile__wrap').addClass('open');
        if ($('.filter__mobile__wrap').hasClass('open')) {
            $(this).parent().find('.filter__mobile__wrap').find('.close__btn').on('click', function () {
                $('.filter__mobile__wrap').removeClass('open');
            });
        }
    });
}

mobile__filter();

function messege__mobile() {
    $('.messege__wrap__dialog-bar__wrap__item').on('click', function () {
        $('.messege__wrap__dialog-bar__wrap__item').removeClass('active');
        $(this).addClass('active');
        $('.messege__wrap__dialog').addClass('active');
        $('.back__dialog').on('click', function () {
            $('.messege__wrap__dialog').removeClass('active');
        });
    });
}
messege__mobile();

function respons_myLot() {
    var widthBody = $(window).width();
    var box = $('.purchases__wrap__row');
    var img = box.find('.purchases__wrap__row__img');
    var btn = $('.purchases__wrap__act');
    $(document).ready(resize__box());
    $(window).resize(function () {
        widthBody = $(window).width();
        resize__box();
    });
    function resize__box() {
        if (widthBody < 743) {
            img.each(function () {
                $(this).prependTo($(this).parent().find('.purchases__wrap__row__desc'));
            });
            btn.each(function () {
                // console.log(btn)
                $(this).appendTo($(this).parents('.purchases__wrap__row'));
            });
        } else {
            img.each(function () {
                $(this).prependTo($(this).parents('.purchases__wrap__row'));
            });
            btn.each(function () {
                // console.log($(this))
                $(this).appendTo($(this).parents('.purchases__wrap__row').find('.purchases__wrap__row__desc'));
            });
        }
    }
}
respons_myLot();

function notification__bell() {

    $('body').on('click', '.btn__notification', function () {
        $(this).parent().find('.notification__wrap').toggleClass('open');
    });

    $('body').on('click', '.notification__wrap__item__head', function () {
        $('.notification__wrap__item__body').removeClass('open');
        $(this).parent().find('.notification__wrap__item__body').addClass('open');
    });

    $('body').on('click', '.header__wrapper .header__naw__right .notification__wrap__item__body__row', function () {
        $(this).find('.status__check i').css('color', '#1FE433');
    });
}
notification__bell();

$(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".notification__wrap"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) {
        // и не по его дочерним элементам
        $('.notification__wrap').removeClass('open'); // скрываем его
    }
});

$('.profile').on('click', function () {
    $('.header__profile').addClass('open');
    $('body').addClass('no__scroll');
    $('.header__profile').find('.close__btn').on('click', function () {
        $(this).parent().removeClass('open');
        $('body').removeClass('no__scroll');
    });
});

$(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".header__profile"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) {
        // и не по его дочерним элементам

        if ($('.header__profile').hasClass('open')) {
            $('body').removeClass('no__scroll');
            $('.header__profile').removeClass('open'); // скрываем его
        }
    }
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map