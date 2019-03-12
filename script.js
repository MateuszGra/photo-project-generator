(function() {
    const hamburger = document.querySelector('.hamburger');
    const background = document.querySelector('.background');
    const body = document.querySelector("body");

    const button = document.querySelector('.start');
    const content = document.querySelector('.content');
    const photoContent = document.querySelector('.photoContent')
    const lines = [];
    const secions = [
    [
        'Pewność Siebie',
        'Ukryci Kolarze',
        'Zeusi Mokotowa',
        'Katowice w ogniu',
        'Niedzielni Fotografowie',
        'Plaże Mielna',
    ],
    [
        'W tym projekcie postanowiłem pokazać to, czego nie widać na zewnątrz.',
        'Środowiska alternatywne są mało przystępne przy pierwszym spotkaniu.',
        'Projekt ma na celu pokazanie, że w każdym człowieku można odnaleźć coś ciekawego.',
        'Projekt to pewnego rodzaju manifest, sprzeciw dyskryminacji środowiska.',
        'W projekcie pokazuję przemiany społeczne następujące po roku 89.',
        'To przekrój przez środowisko, pokazuje moje wieloletnie obserwacje grupy społecznej.',
    ],
    [
        'Zdjęcia skupiają się na dumie i pewności siebie.',
        'Zdjęcia pokazują jak bardzo zmieniamy się jako naród.',
        'Zdjęcia odkrywają w odbiorcy głęboko skrywane uczucia.',
        'Fotografie nacechowane są silnymi emocjami.',
    ],
    [
        'Chciałbym aby moja praca była inspiracją dla wszystkich norwegów.',
        'Chciałbym dotrzeć do wszystkich wrażliwych chłopców.',
    ],
    [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
    ],
    ];
    
    function lottery(number){
        let draw;
        draw = Math.random() * secions[number].length;
        draw = Math.floor(draw);

        return secions[number][draw];
    }
    function Crate(){
       lines[0] = document.createElement('p');
       content.appendChild(lines[0]);
       lines[0].classList.add('line1');
       lines[0].textContent = lottery(0);

        lines[1] = document.createElement('p');
        content.appendChild(lines[1]);
        lines[1].classList.add('line2');
        lines[1].textContent = lottery(1) + ' ' + lottery(2) + ' ' + lottery(3);

        photoContent.src = lottery(4);
    }

    Crate();
    button.addEventListener("click", function(e) { 
        button.classList.add('animate');
        content.removeChild(lines[0]);
        content.removeChild(lines[1]);
        Crate();
    },false)
    button.addEventListener("touch", function(e) { 
        button.classList.add('animate');
        content.removeChild(lines[0]);
        content.removeChild(lines[1]);
        Crate()
    },false)
    button.addEventListener("animationend", function(e) { 
        button.classList.remove('animate');
    },false)
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


})();