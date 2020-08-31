const bouton1 = document.getElementById("pierre");
const bouton2 = document.getElementById("feuille");
const bouton3 = document.getElementById("ciseaux");

let compteurJoueur = 0;
let compteurIA = 0;
let partie = 0;

let affichage1 = document.getElementById("partie");
let affichage2 = document.getElementById("result");
let affichage3 = document.getElementById("partie2");

function partiePFC() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    choixIA = getRandomInt(3);

    let choix;
    if (this.name === "pierre") {
        choix = 0;
    } else if (this.name === "feuille") {
        choix = 1;
    } else if (this.name === "ciseaux") {
        choix = 2;
    }

    if (choixIA ===  choix) {
        partie++;
        affichage1.innerHTML = "Partie n°" + partie;
        affichage2.innerHTML = "Humain : "+compteurJoueur+' | '+"Machine : "+compteurIA;
        affichage3.innerHTML = "Égalité";
    } else if (((choixIA === 0) && (choix === 1)) ||  ((choixIA === 1) && (choix === 2)) || ((choixIA === 2) && (choix === 0))){
        partie++;
        compteurJoueur++;
        affichage1.innerHTML = "Partie n°" + partie;
        affichage2.innerHTML = "Humain : "+compteurJoueur+' | '+"Machine : "+compteurIA;
        affichage3.innerHTML = "Gagné";
    } else {
        partie++;
        compteurIA++;
        affichage1.innerHTML = "Partie n°" + partie;
        affichage2.innerHTML = "Humain : "+compteurJoueur+' | '+"Machine : "+compteurIA;
        affichage3.innerHTML = "Perdu";
    }

}

bouton1.addEventListener("click", partiePFC);
bouton2.addEventListener("click", partiePFC);
bouton3.addEventListe