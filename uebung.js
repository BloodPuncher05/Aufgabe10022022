let beliebigerString = "wieGeil";
let eineZahl = 0;
let nochEineZahl = 0;
let ergebnis;
let eineZahlMitKomma = 0.45;
let unterschied;

function rechenspiel() {
    ergebnis = eineZahl * nochEineZahl

    if (ergebnis>eineZahlMitKomma){
        console.log(ergebnis + ";" + eineZahlMitKomma);
        unterschied = ergebnis - eineZahlMitKomma;
        console.log("Der Unterschied ist:" + unterschied);
    }
    else{
        console.log("Das Ergebnis ist zu klein");
    }
}

function ungerade(ende) {
    for (let i = 1; i < ende; i=i+1) {
        console.log(i)
    }

}