
//variables

var infos = document.getElementById("infos");
var overlay = document.getElementById("overlay");
var quit = document.getElementById("quit");
var play = document.getElementById("play");

var arraySuite = []; // suite de couleurs
var arraySaisi = [];

const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");
const blueDiv = document.getElementById("blue");
const yellowDiv = document.getElementById("yellow");


// apparition et disparition du #overlay
if(infos.addEventListener("click", function() {
    var state = overlay.style.display = "block";
    console.log('Overlay is' + ' ' + state );
}));

else {
    if(quit.addEventListener("click", function() {
        var state = overlay.style.display = "none";
        console.log('Overlay is' + ' ' + state);
    }));
};


function Start() {
    var n = 0; //nombres de touches appuyés qui vont servir à l'incrémentation
    var nbColorPerRound = 5; //nombres maximum de couleurs qui défile sur un tour

    function ColorRandom() {
        while(n < nbColorPerRound) {
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
                switch(arraySuite[i]){ // la couleur choisie fait partie d'une seule case, ensuite elle lui change la couleur avec la fonction en question
                    case 'red':
                        redColor(); 
                        console.log("red");
                        break;
                    case 'green':
                        greenColor();
                        console.log("green");
                        break;
                    case 'blue':
                        blueColor();
                        console.log("blue");
                        break;
                    case 'yellow':
                        yellowColor();
                        console.log("yellow");
                        break;
                    default :
                        console.log("erreur");
                        break;
                }
            },1000 * i)
        }
    };

    Round();
    ColorRandom();
    SelectColor();

    setTimeout(function() { // Permet de finir le tour
        console.log("A VOUS");
    }, 1000 * nbColorPerRound);

};

play.addEventListener("click", function() {
    Start(); // lancement du jeu lorsqu'on appuie sur le #play
});


var i = 0;

function increase()
{
    i++;
    document.getElementById('nbTouches').innerHTML= +i;
}


function SelectColor() { //choix de la couleur suite à la touche cliquée

    nbTouches = 0;

    redDiv.addEventListener("click", function() {
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
    });

    greenDiv.addEventListener("click", function() {
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
    });

    blueDiv.addEventListener("click", function() {
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
    });

    yellowDiv.addEventListener("click", function() {
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
    });

    function ColorConfirmed() {
        if(arraySaisi[0] === arraySuite[0]) {
            console.log("Bonne couleur");
        }
        else {
            console.log("Mauvaise couleur");
        }
    }

};


