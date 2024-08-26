// 1. Creați o funcție pentru a afișa un mesaj de bun venit.
function salutare() {
    //console.log("Salut, lume!");
}
salutare();

// 2. Creați o funcție pentru a calcula aria unui dreptunghi.
function calculeazaAriaDreptunghiului(lungime, latime) {
  // Parametrii: lungime, latime
  let aria = lungime * latime; // Calculul ariei
  return aria; // Returnarea rezultatului
}
calculeazaAriaDreptunghiului(9, 5);

// 3. Creați o funcție care ia un nume ca parametru și afișează mesajul "Salut, [nume]!".
function salutare(nume) {
    console.log("Salut, " + nume + "!");
    // console.log(`Salut, ${nume}!`);
}

// 4. Creează o funcție care ia un număr ca parametru și returnează dublul său.
function dubleaza(numar) {
    return numar * 2;
}

/* 5. Creaţi o funcţie care să ne spună dacă un an e bisect sau ba.
- Dacă un an este divizibil cu 4 și nu este divizibil cu 100, este bisect.
- Dacă un an este divizibil cu 400, este bisect (aceasta este excepția pentru secole).*/
function esteAnBisect(an) {
  // Un an este bisect dacă este divizibil cu 4, dar nu este divizibil cu 100, 
  // cu excepția anilor divizibili cu 400.
  return (an % 4 === 0 && an % 100 !== 0) || an % 400 === 0;
}
/* ***
let an = 2024;
if (esteAnBisect(an)) {
  console.log(an + " este un an bisect.");
} else {
  console.log(an + " nu este un an bisect.");
}
  */


// 5. Creează o funcție care ia un număr și returnează true dacă este par, altfel false.
function estePar(numar) {
  // Verificăm dacă restul împărțirii la 2 este 0
  return numar % 2 === 0;
}




// Function declaration 1
function calcVirsta(anulNasterii) {
    console.log(2024 - anulNasterii); // printam rezultatul
    return age = 2024 - anulNasterii; // returnam variabila age cu valoare calculata
}
calcVirsta(1985); // 39
console.log(age); // 39
// Function expression 1
const calcVirstaExp = function(anulNasterii) {
    return 2024 - anulNasterii;
};
calcVirstaExp(1985); // 39
console.log(age);  // undefined


// Transformam functia cu un parametru in functia cu doi parametri
// Function declaration 2
function calcVirsta2(anulCurrent, anulNasterii) {
    console.log(anulCurrent - anulNasterii); // printam rezultatul
    return age2 = anulCurrent - anulNasterii; // returnam variabila age cu valoare calculata
}
calcVirsta2(2024, 1923);  // 101
console.log(age2);  // 101
// Function expression 2
const calcVirsta2Exp = function(anulCurrent, anulNasterii) {
    return anulCurrent - anulNasterii;
};
calcVirsta2Exp(2024, 1923); // 101
console.log(age2); // undefined






//-----------------------------------------------
function functieExterna() {
    const mesaj = "Salut";
    const functieInterna = () => {
        console.log(mesaj);
    };
    functieInterna();
}

function functieExterna() {
    const mesaj = "Salut";
    function functieInterna() {
        console.log(mesaj);
    };
    functieInterna();
}

function creeazaSalutare(nume) {
  const mesaj = "Salut, ";

  function salutarePersonalizata() {
    console.log(mesaj + nume);
  }

  return salutarePersonalizata;
}

// Creăm o funcție de salutare specifică pentru "Ion"
const salutareIon = creeazaSalutare("Ion");

// Apelăm funcția salutareIon
salutareIon(); // Va afișa: Salut, Ion

