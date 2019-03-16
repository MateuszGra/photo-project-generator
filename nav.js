(function() {
    const hamburger = document.querySelector('.hamburger');
    const background = document.querySelector('.background');
    const body = document.querySelector('body');
    const link = [
        document.querySelector('.link1'),
        document.querySelector('.link2'),
        document.querySelector('.link3'),
        document.querySelector('.link4'),
    ];
    const share = document.querySelector('.share');
    const facebook = document.querySelector('.facebook');
    const twitter = document.querySelector('.twitter');
    
//menu
    hamburger.addEventListener("click", function(e) {
        e.stopPropagation(); 
        hamburger.classList.toggle('clouse');
        background.classList.toggle('show');
    },false)
    background.addEventListener("click", function(e) {
        e.stopPropagation(); 
        hamburger.classList.add('clouse');
        background.classList.add('show');
    },false)
    body.addEventListener("click", function(e) { 
        hamburger.classList.remove('clouse');
        background.classList.remove('show');
    },false)

    hamburger.addEventListener("touch", function(e) {
        e.stopPropagation(); 
        hamburger.classList.toggle('clouse');
        background.classList.toggle('show');
    },false)
    background.addEventListener("touch", function(e) {
        e.stopPropagation(); 
        hamburger.classList.add('clouse');
        background.classList.add('show');
    },false)
    body.addEventListener("touch", function(e) { 
        hamburger.classList.remove('clouse');
        background.classList.remove('show');
    },false)
    
    for(let i=0; i<link.length; i++){
        link[i].addEventListener("click", function(e) {
            e.stopPropagation();  
            hamburger.classList.remove('clouse');
            background.classList.remove('show');
        },false)
        link[i].addEventListener("touch", function(e) {
            e.stopPropagation();  
            hamburger.classList.remove('clouse');
            background.classList.remove('show');
        },false)
    }
    //scroll
    $(document).ready(function() {
        $('a[href^="#"]').on('click', function(event) {
        
        let target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
        });   
    });

    $(document).ready(function() {
        $('a[href^="#"]').on('touch', function(event) {
        
        let target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
        });   
    });
    //share
    share.addEventListener("click", function(e) {
        e.stopPropagation();
        facebook.classList.toggle('none');
        twitter.classList.toggle('none');
    },false)
    body.addEventListener("click", function(e) {
        facebook.classList.remove('none');
        twitter.classList.remove('none');
    },false)
})();