// Appear/Dissapear nav
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

$(document).ready(function() {
    $('.main-ctn-dropdown').on('click', function() {
        var section = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(section).offset().top }, 700);
        return false;
    });
});


//Appear skills
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

    }, { offset: '50%' });

    $('.about-ctn-title').waypoint(function(direction) {
        if (direction == 'down') {
            $('.about-ctn-title').addClass('show');
        } else {
            $('.about-ctn-title').removeClass('show');
        }
    }, { offset: '50%' });

    $('.about-ctn-big-ctn-bio').waypoint(function(direction) {
        if (direction == 'down') {
            $('.about-ctn-big-ctn-bio').addClass('show');
        } else {
            $('.about-ctn-big-ctn-bio').removeClass('show');
        }
    }, { offset: '50%' });

    $('.ctn-skills-h2').waypoint(function(direction) {
        if (direction == 'down') {
            $('.ctn-skills-h2').addClass('show');
        } else {
            $('.ctn-skills-h2').removeClass('show');
        }
    }, { offset: '50%' });

    $('.about-ctn-big-ctn-bio').waypoint(function(direction) {
        if (direction == 'down') {
            $('.about-ctn-big-ctn-assets').addClass('show');
        } else {
            $('.about-ctn-big-ctn-assets').removeClass('show');
        }
    }, { offset: '50%' });

});