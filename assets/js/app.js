/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('waypoints/lib/jquery.waypoints.js')
require('@loadingio/loading-bar')
require('stellar.js')

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


//Appartion menu 
$(document).ready(function() {
    $('.main-ctn-burger').click(function() {
        $('.main-ctn-nav').toggleClass('main-ctn-nav-toggle')
        $('.main-ctn-burger').toggleClass('toggle-burger')
        $('.nav-menu').toggleClass('nav-menu-toggle')

    });

    var el = document.querySelector('.balayage')
    el.addEventListener("animationend", show, false)


    function show() {
        $('.main-ctn-bigTitle, .main-ctn-burger, .main-ctn-dropdown ').addClass('show');
    };
});



// Appear/Dissapear nav


$(document).ready(function() {
    $('.main-ctn-dropdown, .menu-link-1, .menu-link-2, .menu-link-3, .menu-link-4, .menu-link-5').on('click', function() {
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 700);
        return false;
    });
});


//Appear skills + Waypoints
$(document).ready(function() {
    $('.ctn-skills-ctn-triangle').waypoint(function(direction) {
        var t1 = new ldBar('.T-1')
        var t2 = new ldBar('.T-2')
        var t3 = new ldBar('.T-3')
        var t4 = new ldBar('.T-4')
        var t5 = new ldBar('.T-5')
        var t6 = new ldBar('.T-6')
        var t7 = new ldBar('.T-7')
        var t8 = new ldBar('.T-8')
        if (direction == 'down') {
            t1.set(90)
            t2.set(90)
            t3.set(80)
            t4.set(70)
            t5.set(70)
            t6.set(75)
            t7.set(60)
            t8.set(70)
        } else {
            t1.set(0)
            t2.set(0)
            t3.set(0)
            t4.set(0)
            t5.set(0)
            t6.set(0)
            t7.set(0)
            t8.set(0)
        }

    }, {
        offset: '70%'
    });

    $('.about-ctn-title').waypoint(function(direction) {
        if (direction == 'down') {
            $('.about-ctn-title').addClass('show');
        } else {
            $('.about-ctn-title').removeClass('show');
        }
    }, {
        offset: '50%'
    });

    $('.about-ctn-big-ctn-bio').waypoint(function(direction) {
        if (direction == 'down') {
            $('.about-ctn-big-ctn-bio').addClass('show');
        } else {
            $('.about-ctn-big-ctn-bio').removeClass('show');
        }
    }, {
        offset: '50%'
    });

    $('.ctn-skills-h2').waypoint(function(direction) {
        if (direction == 'down') {
            $('.ctn-skills-h2').addClass('show');
        } else {
            $('.ctn-skills-h2').removeClass('show');
        }
    }, {
        offset: '70%'
    });

    $('.about-ctn-big-ctn-assets').waypoint(function(direction) {
        if (direction == 'down') {
            $('.about-ctn-big-ctn-assets').addClass('show');
        } else {
            $('.about-ctn-big-ctn-assets').removeClass('show');
        }
    }, {
        offset: '90%'
    });

    $('.career').waypoint(function(direction) {
        if (direction == 'down') {
            $('.item').addClass('item-show');
        } else {
            $('.item').removeClass('item-show');
        }
    }, {
        offset: '50%'
    });

    $('.portfolio').waypoint(function(direction) {
        if (direction == 'down') {
            $('.portfolio-card').addClass('portfolio-card-show');
        } else {
            $('.portfolio-card').removeClass('portfolio-card-show');
        }
    }, {
        offset: '50%'
    });

    $('.contact-form').waypoint(function(direction) {
        if (direction == 'down') {
            $('.contact-form').addClass('contact-form-show');
        } else {
            $('.contact-form').removeClass('contact-form-show');
        }
    }, {
        offset: '90%'
    });





});



//Portfolio responsive
$(document).ready(function() {

    $('.career-ctn-center-gallery-wrap').on('click', 'div.career-btn-reponsive', function() {

        $(this).siblings('.item-ctn-title').toggleClass('item-ctn-title-hide-reponsive')
        $(this).parents('.item').toggleClass('item-show-responsive')
        $(this).siblings('.item-ctn-desc').toggleClass('item-ctn-desc-show-responsive')
        $(this).children('.fa-chevron-down').toggleClass('chevron-rotate')

    });
});


//OUverture modal avec ajax plus loader




$(document).ready(function() {

    $('.portfolio-card-btn').click(function() {
        var url = Routing.generate('project_show', {
            'id': $(this).attr('id')
        });
        $.get(url, function(data) {
            $(".modal-content").html(data);
        });
    });

    var modal = $("#Modal"); //your modal 

    $(document).on({
        ajaxStart: function() {
            modal.find(".modal-content").html(""); //empty modal every ajaxstart
            $('.load').show();
            modal.modal("hide"); //hide

        },
        ajaxStop: function() {
            $('.load').hide();
            modal.modal("show"); //modal show
        }
    });
});


//Form barre rouge
$(document).ready(function() {
    $('.form-name').keyup(function() {
        if (this.value) {
            $('.form-span-name').addClass('span-scale');
        } else {
            $('.form-span-name').removeClass('span-scale');
        }
    });
    $('.form-mail').keyup(function() {
        if (this.value) {
            $('.form-span-mail').addClass('span-scale');
        } else {
            $('.form-span-mail').removeClass('span-scale');
        }
    });
    $('.form-text').keyup(function() {
        if (this.value) {
            $('.form-span-text').addClass('span-scale');
        } else {
            $('.form-span-text').removeClass('span-scale');
        }
    });
});