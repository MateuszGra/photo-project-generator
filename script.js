(function() {
    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const lines = [];
    const secions = [
    [
        'Pewność Siebie',
        'Ukryci kolarze',
        'Zeusi Mokotowa',
        'Katowice w ogniu',
        'Niedzielni Fotografowie',
    ],
    [
        'W tym projekcie postanowiłem pokazać to, czego nie widać na zewnątrz.',
        'Środowiska alternatywne są mało przystępne przy pierwszym spotkaniu.',
        'Projekt ma na celu pokazanie, że w każdym człowieku można odnaleźć coś ciekawego.',
        'Projekt to pewnego rodzaju manifest, sprzeciw dyskryminacji środowiska.',
        'W projekcie pokazuję przepmiany społeczne następujące po roku 89.',
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
    ];
    function lottery(number){
        let draw;
        draw = Math.random() * secions[number].length;
        draw = Math.floor(draw);

        return secions[number][draw];
    }
    function Crate(){
       lines[0] = document.createElement('p');
       body.appendChild(lines[0]);
       lines[0].textContent = lottery(0);
       lines[0].classList.add('line1');

       lines[1] = document.createElement('p');
       body.appendChild(lines[1]);
       lines[1].classList.add('line2');
       lines[1].textContent = lottery(1) + ' ' + lottery(2) + ' ' + lottery(3);
    }

    Crate();
    button.addEventListener("click", function(e) { 
        button.classList.add('animate');
        body.removeChild(lines[0]);
        body.removeChild(lines[1]);
        Crate();
    },false)
    button.addEventListener("touch", function(e) { 
        button.classList.add('animate');
        body.removeChild(lines[0]);
        body.removeChild(lines[1]);
        Crate()
    },false)
    button.addEventListener("animationend", function(e) { 
        button.classList.remove('animate');
    },false)


})();