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



//Appear skills
$(document).ready(function() {
    $('.about').waypoint(function() {
        var t1 = new ldBar('.T-1')
        var t2 = new ldBar('.T-2')
        var t3 = new ldBar('.T-3')
        var t4 = new ldBar('.T-4')
        var t5 = new ldBar('.T-5')
        var t6 = new ldBar('.T-6')
        var t7 = new ldBar('.T-7')
        var t8 = new ldBar('.T-8')

        t1.set(90)
        t2.set(90)
        t3.set(80)
        t4.set(70)
        t5.set(70)
        t6.set(75)
        t7.set(60)
        t8.set(70)
    });
});