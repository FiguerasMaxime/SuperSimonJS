
function Start() {
    var n = 0; //nombres de touches appuyés qui vont servir à l'incrémentation
    var nbColorPerRound = 8; //nombres maximum de couleurs qui défile sur un tour
    var arraySuite = []; // suite de couleurs

    function ColorRandom() {
        while(n < nbColorPerRound) {
            var arrayColors = ["red", "green", "blue", "yellow"]; // toutes les couleurs super simon
            var colorChoosen = arrayColors[Math.floor(Math.random() * arrayColors.length)]; // PAS OUBLIE PARCE = CEST DE LA CHIASSE, on récupère l'entier avec floor dans le tableau colors avec *
            arraySuite.push(colorChoosen); // cela ressort une couleur
            n++; //passe au prochain tirage
        }
    };

    function greenColor() {
        var green = document.getElementById("green");
        setTimeout(() => {
            green.style.backgroundColor = "green";
        }, 150);
        green.style.backgroundColor = "lightblue"; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
    };

    function redColor() {
        var red = document.getElementById("red");
        setTimeout(() => {
            red.style.backgroundColor = "red";
        }, 150);
        red.style.backgroundColor = "lightblue"; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
    };

    function blueColor() {
        var blue = document.getElementById("blue");
        setTimeout(() => {
            blue.style.backgroundColor = "blue";
        }, 150);
        blue.style.backgroundColor = "lightblue"; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
    };
    
    function yellowColor() {
        var yellow = document.getElementById("yellow");
        setTimeout(() => {
            yellow.style.backgroundColor = "yellow";
        }, 150);
        yellow.style.backgroundColor = "lightblue"; //mettre cela car sinon la div n'a plus de couleur si elle a été tiré au sort
    };

    function Suite() {
        for (let i = 0; i < nbColorPerRound; i++) { // fait autant de boucles que de nombres de couleurs par tour
            setTimeout(() => {
                switch(arraySuite[i]){ // la couleur choisie fait partie d'un seul case, ensuite elle lui change la couleur avec la fonction en question
                    case 'red':
                        redColor(); //
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

    Suite();
    ColorRandom();

};

Start();