$(document).ready(function() {

    // Navbar Disappear and Reappear
    function navbarHide() {
        var documentElem = $(document),
            nav = $('nav'),
            lastScrollTop = 0;
        
        documentElem.on('scroll', function() {
            var currentScrollTop = $(this).scrollTop();
            
            //scroll down
            if (currentScrollTop > lastScrollTop) nav.addClass('hidden');
            //scroll up
            else nav.removeClass('hidden');
            
            lastScrollTop = currentScrollTop;
        });
    }
    navbarHide();


        $(".aboutme-mini").hover(function() {
            $(".social-link-mini-aboutme").animate({opacity: 0.6}, 150);
        }, function() {
            $(".social-link-mini-aboutme").animate({opacity: 1}, 150);
        });

        $(".github-mini").hover(function() {
            $(".social-link-mini-github").animate({opacity: 0.6}, 150);
        }, function() {
            $(".social-link-mini-github").animate({opacity: 1}, 150);
        });

        $(".linkedin-mini").hover(function() {
            $(".social-link-mini-linkedin").animate({opacity: 0.6}, 150);
        }, function() {
            $(".social-link-mini-linkedin").animate({opacity: 1}, 150);
        });

        $(".resume-mini").hover(function() {
            $(".social-link-mini-resume").animate({opacity: 0.6}, 150);
        }, function() {
            $(".social-link-mini-resume").animate({opacity: 1}, 150);
        });

        $(".email-mini").hover(function() {
            $(".social-link-mini-email").animate({opacity: 0.6}, 150);
        }, function() {
            $(".social-link-mini-email").animate({opacity: 1}, 150);
        });
    

});