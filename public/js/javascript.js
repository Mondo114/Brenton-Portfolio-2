(function() {
                
    var documentElem = $(document),
        nav = $('nav'),
        lastScrollTop = 0;
    
    documentElem.on('scroll', function() {
        var currentScrollTop = $(this).scrollTop();
        
        //scroll down
        if ( currentScrollTop > lastScrollTop ) nav.addClass('hidden');
        //scroll up
        else nav.removeClass('hidden');
        
        lastScrollTop = currentScrollTop;
    });
    
})();


var submitAlert = function() {
    event.preventDefault();
    alert("This is under construction. Please connect with me using my email.");
}


var homeScroll = function() {
    window.scrollTo(0, 0);
}