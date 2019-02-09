(function() {
    const button = document.querySelector('button');
    const lines = [
        document.querySelector('.line1'),
        document.querySelector('.line2'),
        document.querySelector('.line3'),
        document.querySelector('.line4'),
    ];
    const title = [
        'Pewność Siebie',
        'Ukryci kolarze',
        'Zeusi Mokotowa',
        'Katowice w ogniu',
    ];
    const goal = [
        'W tym projekcie postanowiłem pokazać to czego nie widac na na zewnątrz.',
        'Środowiska alternatywne są mało przystępne przy pierwszym spotkaniu.',
    ];
    const emotions = [
        'Zdjęcia skupiają się na dumie i pewności siebie.',
        'Zdjęcia pokazują jak bardzo zmieniamy się jako naród.',
    ];
    const message = [
        'Chciałbym aby moja praca była inspiracją dla wszystkich norwegów.',
        'Chciałbym dotrzeć do wszystkich wrażliwych chłopców.',
    ];
    function lottery (section , line){
        let draw;
        draw = Math.random() * section.length;
        draw = Math.floor(draw);

        lines[line].textContent = section[draw];
    }

    lottery(title, 0);
    lottery(goal, 1);
    lottery(emotions, 2);
    lottery(message, 3);

    button.addEventListener("click", function(e) { 
        button.classList.add('animate');
        lottery(title, 0);
        lottery(goal, 1);
        lottery(emotions, 2);
        lottery(message, 3);
    },false)
    button.addEventListener("touch", function(e) { 
        button.classList.add('animate');
        lottery(title, 0);
        lottery(goal, 1);
        lottery(emotions, 2);
        lottery(message, 3);
    },false)
    button.addEventListener("animationend", function(e) { 
        button.classList.remove('animate');
    },false)


})();