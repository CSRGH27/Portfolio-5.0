// Appear/Dissapear nav
     $('.main-ctn-burger').click(function () { 
        $('.main-ctn-nav').toggleClass('main-ctn-nav-toggle')
        $('.main-ctn-burger').toggleClass('toggle-burger')
        $('.nav-menu').toggleClass('nav-menu-toggle')
        
    });

    var el = document.querySelector('.balayage')
    el.addEventListener("animationend", show, false)
    
    
    function show() {
        $('.main-ctn-bigTitle, .main-ctn-burger, .main-ctn-dropdown ').addClass('show');
    };
