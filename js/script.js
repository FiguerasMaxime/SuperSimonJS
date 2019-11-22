
//variables

var infos = document.getElementById("infos");
var overlay = document.getElementById("overlay");
var quit = document.getElementById("quit");
var play = document.getElementById("play");
const youTurn = document.getElementById("turn");
var nbColorPerRound = 1; //nombres maximum de couleurs qui défile sur un tour
var tour = 0;

var arraySuite = []; // suite de couleurs
var arraySaisi = [];

const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");
const blueDiv = document.getElementById("blue");
const yellowDiv = document.getElementById("yellow");

var audioDO = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audioRE = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audioMI = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audioFA = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');


// apparition et disparition du #overlay
if (infos.addEventListener("click", function () {
    var state = overlay.style.display = "block";
    console.log('Overlay is' + ' ' + state);
}));

else {
    if (quit.addEventListener("click", function () {
        var state = overlay.style.display = "none";
        console.log('Overlay is' + ' ' + state);
    }));
};


//ANIME JS ANIMATION 

function animeSoundDO() {
    anime({
        targets: '.soundDO',
        duration: 500,
        translateY: -100,
        opacity: 1,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });
    audioDO.play();
}

function animeSoundRE() {
    anime({
        targets: '.soundRE',
        duration: 500,
        translateY: -100,
        opacity: 1,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });
    audioRE.play();
}

function animeSoundMI() {
    anime({
        targets: '.soundMI',
        duration: 500,
        translateY: -100,
        opacity: 1,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });
    audioMI.play();
}

function animeSoundFA() {
    anime({
        targets: '.soundFA',
        duration: 500,
        translateY: -100,
        opacity: 1,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });
    audioFA.play();
}

function reset() {
    arraySuite = [];
    arraySaisi = [];
    nbColorPerRound++;
    console.log(arraySaisi);
    console.log(arraySuite);
    console.log(nbColorPerRound);
}

function Start() {
    var n = 0; //nombres de touches appuyés qui vont servir à l'incrémentation

    function ColorRandom() {
        while (n < nbColorPerRound) {
            n++; //passe au prochain tirage
            var arrayColors = ["red", "green", "blue", "yellow"]; // toutes les couleurs super simon
            var colorChoosen = arrayColors[Math.floor(Math.random() * arrayColors.length)]; // PAS OUBLIE PARCE = CEST DE LA CHIASSE, on récupère l'entier avec floor dans le tableau colors avec *
            arraySuite.push(colorChoosen); // cela ressort une couleur
        }
    };

    function greenColor() {
        setTimeout(() => {
            green.style.transform = 'scale(1)';
            green.style.opacity = "1";
        }, 300);
        green.style.transform = 'scale(0.8)'; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
        green.style.opacity = "0.6";
    };

    function redColor() {
        setTimeout(() => {
            red.style.transform = 'scale(1)';
            red.style.opacity = "1";
        }, 300);
        red.style.transform = 'scale(0.8)'; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
        red.style.opacity = "0.6";
    };

    function blueColor() {
        setTimeout(() => {
            blue.style.transform = 'scale(1)';
            blue.style.opacity = "1";
        }, 300);
        blue.style.transform = 'scale(0.8)'; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
        blue.style.opacity = "0.6";
    };

    function yellowColor() {
        setTimeout(() => {
            yellow.style.transform = 'scale(1)';
            yellow.style.opacity = "1";
        }, 300);
        yellow.style.transform = 'scale(0.8)'; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
        yellow.style.opacity = "0.6";
    };



    function Round() {
        console.log("Choix des couleurs")
        for (let i = 0; i < nbColorPerRound; i++) { // fait autant de boucles que de nombres de couleurs par tour
            setTimeout(() => {
                switch (arraySuite[i]) { // la couleur choisie fait partie d'une seule case, ensuite elle lui change la couleur avec la fonction en question
                    case 'red':
                        redColor();
                        console.log("red");
                        animeSoundRE();
                        break;
                    case 'green':
                        greenColor();
                        console.log("green");
                        animeSoundDO();
                        break;
                    case 'blue':
                        blueColor();
                        console.log("blue");
                        animeSoundMI();
                        break;
                    case 'yellow':
                        yellowColor();
                        console.log("yellow");
                        animeSoundFA();
                        break;
                    default:
                        console.log("erreur");
                        break;
                }
            }, 1000 * i)
        }
    };

    Round();
    ColorRandom();
    SelectColor();

    function yourTurn() {
        youTurn.style.display = "block";
    }

    setTimeout(function () { // Permet de finir le tour
        console.log("A VOUS");
        yourTurn();
    }, 1000 * nbColorPerRound);

};

play.addEventListener("click", function () {
    Start(); // lancement du jeu lorsqu'on appuie sur le #play
});


var i = 0;

function increase() {
    i++;
    document.getElementById('nbTouches').innerHTML = +i;
}


function SelectColor() { //choix de la couleur suite à la touche cliquée

    redDiv.addEventListener("click", function () {
        console.log("redDiv");
        setTimeout(() => {
            red.style.transform = 'scale(1)';
            red.style.opacity = "1";
        }, 300);
        red.style.transform = 'scale(0.8)'; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
        red.style.opacity = "0.6";
        increase();
        arraySaisi.push("red");
        console.log(arraySaisi);
        ColorConfirmed();
        animeSoundRE();
    });

    greenDiv.addEventListener("click", function () {
        console.log("greenDiv");
        setTimeout(() => {
            green.style.transform = 'scale(1)';
            green.style.opacity = "1";
        }, 300);
        green.style.transform = 'scale(0.8)'; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
        green.style.opacity = "0.6";
        increase();
        arraySaisi.push("green");
        console.log(arraySaisi);
        ColorConfirmed();
        animeSoundDO();
    });

    blueDiv.addEventListener("click", function () {
        console.log("blueDiv");
        setTimeout(() => {
            blue.style.transform = 'scale(1)';
            blue.style.opacity = "1";
        }, 300);
        blue.style.transform = 'scale(0.8)'; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
        blue.style.opacity = "0.6";
        increase();
        arraySaisi.push("blue");
        console.log(arraySaisi);
        ColorConfirmed();
        animeSoundMI();
    });

    yellowDiv.addEventListener("click", function () {
        console.log("yellowDiv");
        setTimeout(() => {
            yellow.style.transform = 'scale(1)';
            yellow.style.opacity = "1";
        }, 300);
        yellow.style.transform = 'scale(0.8)'; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
        yellow.style.opacity = "0.6";
        increase();
        arraySaisi.push("yellow");
        console.log(arraySaisi);
        ColorConfirmed();
        animeSoundFA();
    });

    function ColorConfirmed() {
        for (let i = 0; i < arraySaisi.length; i++) {
            if (arraySaisi[i] === arraySuite[i]) {
                console.log('YES');
                console.log(i);
                if (arraySaisi.length == arraySuite.length && i == nbColorPerRound - 1) {
                    console.log("bonne Combinaison");
                    tour++;
                    document.getElementById('nbTours').innerHTML = tour;
                    youTurn.style.display = "none";
                    reset();
                }
            }
            else {
                console.log('NO');
                alert("perdu");
            }

            // arraySaisi.length === arraySuite.length ? console.log('bonne combinaison') : console.log('NO');
        }
    }

};


