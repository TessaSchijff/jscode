/* ========================================================================================================

EINDOPDRACHT PROGRAMMEREN   |   TESSA SCHIJFF   |    KLAS: ROZE  [19/20]    |     DOCENT: FONS VAN KESTEREN

===========================================================================================================



-----------------------------------------------------------------------------------------------------------
DECLARATIE
----------------------------------------------------------------------------------------------------------- */

// - - - - - Opties paneel - - - - -

var blokjesContainer = document.querySelector("#blokjes");
var kleuren = ['Rood', 'Oranje', 'Geel', 'Lime', 'Blauw', 'Grijs'];

for (kleurInPaneel in kleuren) {
    var blokje = document.createElement("span");
    blokje.className = "kleur";
    blokje.id = "bp-" + kleuren[kleurInPaneel];
    blokje.innerText = kleuren[kleurInPaneel];
    blokjesContainer.appendChild(blokje);
};

//  Buttons voor de kleur van de backpack
let knopTasRood = document.querySelector('#bp-Rood');
let knopTasOranje = document.querySelector('#bp-Oranje');
let knopTasGeel = document.querySelector('#bp-Geel');
let knopTasLime = document.querySelector('#bp-Lime');
let knopTasBlauw = document.querySelector('#bp-Blauw');
let knopTasGrijs = document.querySelector('#bp-Grijs');

// Zet rode button als standaard geselecteerd (als er nog geen keuze is gemaakt)
knopTasRood.classList.add('boldSelected')

// Buttons voor het patroon
let patroonGeenKnop = document.querySelector('#ptrn-geen');
let patroonVerenKnop = document.querySelector('#ptrn-veren');
let patroonPolkadotKnop = document.querySelector('#ptrn-polkadot');
let patroonZigzagKnop = document.querySelector('#ptrn-zigzag');

// Prijs
let prijsVeld = document.querySelector("#prijs")
let naamVeld = document.querySelector("#naam")


// - - - - - Weergave

//  IMG --> backpack, patroon, (& print).
let backpack = document.querySelector('#backpack');
let patroon = document.querySelector('#patroon');


/* -----------------------------------------------------------------------------------------------------------
EVENTHANDLERS
----------------------------------------------------------------------------------------------------------- */

//  Geselecteerde kleur op button wijzigen
function removeSelectedAll() {
    let kleurHokjes = [knopTasRood, knopTasBlauw, knopTasGeel, knopTasGrijs, knopTasLime, knopTasOranje];
    kleurHokjes.forEach(function (kleurHokje) { kleurHokje.className = "kleur" });
}

//  Kleuren Backpack Veranderen + Class voor button
function tasrood(event) {
    backpack.src = 'img/backpack-rood.png';
    removeSelectedAll()
    knopTasRood.classList.add('boldSelected')
}
function tasoranje(event) {
    backpack.src = 'img/backpack-oranje.png';
    removeSelectedAll()
    knopTasOranje.classList.add('boldSelected')
}
function tasgeel(event) {
    backpack.src = 'img/backpack-geel.png';
    removeSelectedAll()
    knopTasGeel.classList.add('boldSelected')
}
function taslime(event) {
    backpack.src = 'img/backpack-lime.png';
    removeSelectedAll()
    knopTasLime.classList.add('boldSelected')
}
function tasblauw(event) {
    backpack.src = 'img/backpack-blauw.png';
    removeSelectedAll()
    knopTasBlauw.classList.add('boldSelected')
}
function tasgrijs(event) {
    backpack.src = 'img/backpack-grijs.png';
    removeSelectedAll()
    knopTasGrijs.classList.add('boldSelected')
}

// Patroon wijzigen

function updatePrijs() {
    if (patroon.hidden == true) {
        prijsVeld.innerText = '€20';
    } else {
        prijsVeld.innerText = '€25';
    }
}

function patroonGeen(event) {
    patroon.hidden = true;
    updatePrijs();
}

function patroonVeren(event) {
    patroon.hidden = false;
    patroon.src = 'img/patroon-veren-wit.png';
    updatePrijs();
}

function patroonPolkadot(event) {
    patroon.hidden = false;
    patroon.src = 'img/patroon-polkadot-wit.png';
    updatePrijs();
}

function patroonZigzag(event) {
    patroon.hidden = false;
    patroon.src = 'img/patroon-zigzag-wit.png';
    updatePrijs();
}

// Form
function afronden() {
    alert('Gefeliciteerd met je bestelling ' + naamVeld.value + '! Je creatie komt zo snel mogelijk jouw kant uit ;-)');
}

/* -----------------------------------------------------------------------------------------------------------
EVENTLISTENERS
----------------------------------------------------------------------------------------------------------- */

//  Kleur backpack wijzigen
knopTasRood.addEventListener('click', tasrood);
knopTasOranje.addEventListener('click', tasoranje);
knopTasGeel.addEventListener('click', tasgeel);
knopTasLime.addEventListener('click', taslime);
knopTasBlauw.addEventListener('click', tasblauw);
knopTasGrijs.addEventListener('click', tasgrijs);

// Patroon wijzigen
patroonGeenKnop.addEventListener('click', patroonGeen);
patroonPolkadotKnop.addEventListener('click', patroonPolkadot);
patroonVerenKnop.addEventListener('click', patroonVeren);
patroonZigzagKnop.addEventListener('click', patroonZigzag);


/*
  DECLARATIE AFBEELDINGEN
  -----------------------

Tas (bewerkt)
    https://redlandlondon.com/shop/bags/pantone-large-laptop-backpack-tango-red/
Veren print
    https://www.dreamstime.com/stock-illustration-vector-black-white-feather-pattern-seamless-classical-texture-elegant-sketch-hand-painted-feathers-image72921470
Sterren
    https://www.123rf.com/photo_127636977_stock-vector-star-pattern-star-geometric-background-strip-line-stars-abstract-lines.html
 */
