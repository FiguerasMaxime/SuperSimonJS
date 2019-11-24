
//variables

var start = 0; //lancer le jeu en fonction de start

var infos = document.getElementById("infos"); // bouton pour afficher les infos
var overlay = document.getElementById("overlay"); // overlay des description
var quit = document.getElementById("quit"); //croix qui quitte les infos
var play = document.getElementById("play"); //bouton pour lancer le jeu
var replay = document.getElementById("replay"); // reload le jeu en reload la page
var over = document.getElementById("gameOver"); //Game over div
const youTurn = document.getElementById("turn"); // texte qui affiche ton tour
var nbColorPerRound = 1; //nombres maximum de couleurs qui défile sur un tour
var tour = 0;
var speed = 1000;

var arraySuite = []; // suite de couleurs
var arraySaisi = []; // suite que tappe le joueur dans le jeu

const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");
const blueDiv = document.getElementById("blue");
const yellowDiv = document.getElementById("yellow");
//fichiers audios des 4 notes
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

function GameOver() {
    over.style.display = "block";
}


//ANIME JS ANIMATION 

function animeSoundDO() { //anime js avec une translation vers le haut en alternate c'est à dire qui fait allé retour 
    anime({
        targets: '.soundDO',
        duration: 500,
        translateY: -100,
        opacity: 1,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });
    audioDO.play(); // lance l'audio 
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

function greenColor() { // animation lorsque l'on tappe sur la couleur
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

var n = 0; //nombres de touches appuyés qui vont servir à l'incrémentation

function ColorRandom() { // choix d'une couleur au hasard
    while (n < nbColorPerRound) {
        n++; //passe au prochain tirage
        var arrayColors = ["red", "green", "blue", "yellow"]; // toutes les couleurs super simon
        var colorChoosen = arrayColors[Math.floor(Math.random() * arrayColors.length)]; // PAS OUBLIE PARCE = CEST DE LA CHIASSE, on récupère l'entier avec floor dans le tableau colors avec *
        arraySuite.push(colorChoosen); // cela ressort une couleur
    }
    n = 0;
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
        }, speed * i)
    }
};

function reset() { // on remet les compteurs à 0, c'est comme si on supprimait les valeurs
    arraySuite = [];
    arraySaisi = [];
    nbColorPerRound++;
    console.log(arraySaisi);
    console.log(arraySuite);
    console.log(nbColorPerRound);
}

function Start() { // fonction qui sert à lancer le jeu, elle contrôle la majorité du code.

    play.style.display = 'none';

    ColorRandom();
    Round();
    SelectColor();

    function yourTurn() {
        youTurn.style.display = "block";
    }

    setTimeout(function () { // Permet de finir le tour
        console.log("A VOUS");
        yourTurn();
    }, 1000 * nbColorPerRound);

};

function StartGame() { //initié le start pour éviter que le jeu se lance au chargement de page 
    if(start == 0) {
        Start();
        start = 1;
    }
}

play.addEventListener("click", function () {
    StartGame(); // lancement du jeu lorsqu'on appuie sur le #play
});


var i = 0;

function increase() { //permet d'augmenter sur le nombres de touches qu'on touche par tour
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

    function ColorConfirmed() { // vérifie sur la couleur choisite est la bonne
        for (let i = 0; i < arraySaisi.length; i++) {
            if (arraySaisi[i] === arraySuite[i]) { // vérification entre les 2 tableaux
                console.log('YES');
                console.log(i);
                if (arraySaisi.length == arraySuite.length && i == nbColorPerRound - 1) { // comme i = 0, si nbColorPerRound = 3, pour vérifier les 3 valeurs, i = 0 => i = 1 => i = 2 donc nbColorPerRound doit baisser de 1 
                    setTimeout(() => {
                        console.log("bonne Combinaison");
                        tour++;
                        if(tour < 8){
                            speed -= 100;
                        }
                        else{
                            speed = speed;
                        }
                        document.getElementById('nbTours').innerHTML = tour;
                        youTurn.style.display = "none";
                        reset();
                        ColorRandom();
                        Round();
                    }, 1500);
                }
            }
            else {
                console.log('NO');
                GameOver();
            }

            // arraySaisi.length === arraySuite.length ? console.log('bonne combinaison') : console.log('NO');
        }
    }

};




