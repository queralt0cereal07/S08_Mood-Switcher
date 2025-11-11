const contenido = document.getElementById("cambiar");
const perro = document.getElementById("perro");
const gato = document.getElementById("gato");
const tamaño = document.getElementById("tamaño");
const naranja = document.getElementById("naranja");
const paleta = document.getElementById("paleta");
const ocultar = document.getElementById("ocultar");
const mostrar = document.getElementById("mostrar");
const recargar = document.getElementById("recargar");

let paragraf = document.querySelector("p");
let foto = document.querySelector("img");
let textoDiv = document.querySelector(".texto");

// Seleccionem totes les estrelles
let estrelles = document.querySelectorAll("header h2 span i");

// Mapegem classe -> color per a les estrelles
const colorsEstat = {
    felic: "#fff178",
    trist: "#90CAF9",
    enfadat: "#efa3a2",
    relaxat: "#A5D6A7",
    desanimat: "#BDBDBD",
    confiat: "#fbb5f1",
    emocionat: "#a8fbe5",
    insegur: "#ceb2fe"
};

// Funció per generar confeti amb emoji
function generarConfeti(emoji) {
    const confeti = document.createElement("span");
    confeti.textContent = emoji;
    confeti.style.fontSize = `${Math.random() * 30 + 20}px`;
    confeti.style.left = `${Math.random() * textoDiv.offsetWidth}px`;
    confeti.style.top = `${textoDiv.offsetHeight}px`;
    confeti.style.opacity = 1;
    confeti.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
    
    textoDiv.appendChild(confeti);

    setTimeout(() => {
        confeti.style.transform = `translateY(-${textoDiv.offsetHeight + 50}px) rotate(${Math.random()*360}deg)`;
        confeti.style.opacity = 0;
    }, 10);

    setTimeout(() => {
        confeti.remove();
    }, 1600);
}

// Funció principal per canviar estat i afegir bombeig, confeti i estrelles
function canviaEstat(text, imatge, classeFons, emoji) {
    // Text
    paragraf.innerHTML = text;

    // Imatge amb bombeig
    foto.classList.remove("img-bombeig");
    foto.src = imatge;
    void foto.offsetWidth;
    foto.classList.add("img-bombeig");

    // Fons del text
    textoDiv.className = "texto " + classeFons;

    // Confeti
    for (let i = 0; i < 10; i++) {
        generarConfeti(emoji);
    }

    // Canvia color de totes les estrelles immediatament
    estrelles.forEach(star => star.style.color = colorsEstat[classeFons]);
}


// Botons amb emojis
contenido.addEventListener("click", ()=>{
    canviaEstat(
        "Les persones se senten alegres quan passen coses bones, com rebre una sorpresa, jugar amb amics o rebre bones notícies. L’alegria fa que el cos estigui actiu, el cor bategui més ràpid i que el rostre somrigui, fent que compartir moments amb altres sigui més divertit.",
        "img/feliç.png",
        "felic",
        "🤗"
    );
});

perro.addEventListener("click", ()=>{
    canviaEstat(
        "Les persones poden sentir tristesa quan alguna cosa no surt com esperaven, quan es separen d’algú estimat o quan experimenten pèrdues. La tristesa és una emoció normal que ajuda a comprendre els sentiments i a demanar ajuda o suport quan cal.",
        "img/trist.png",
        "trist",
        "😓"
    );
});

gato.addEventListener("click", ()=>{
    canviaEstat(
        "L'enuig o la ràbia apareix quan algú sent que s'ha fet alguna injustícia, quan les coses no van com volien o quan algú els molesta. Aquesta emoció ajuda a establir límits, però és important aprendre a controlar-la per no fer mal a ningú ni a un mateix.",
        "img/enfadat.png",
        "enfadat",
        "👿"
    );
});

tamaño.addEventListener("click", ()=>{
    canviaEstat(
        "La calma o la tranquil·litat es sent quan no hi ha pressa ni preocupacions i el cos i la ment poden descansar. Sentir-se relaxat ajuda a recuperar energia, pensar millor i gaudir de moments agradables sense estrès.",
        "img/relaxat.png",
        "relaxat",
        "😌"
    );
});

naranja.addEventListener("click", ()=>{
    canviaEstat(
        "El desànim pot aparèixer quan les coses semblen difícils, quan hi ha pocs èxits o quan no es té motivació per començar activitats. És normal sentir-se així de tant en tant, i parlar amb algú o descansar pot ajudar a recuperar forces.",
        "img/desanimat.png",
        "desanimat",
        "🫩"
    );
});

paleta.addEventListener("click", ()=>{
    canviaEstat(
        "La confiança apareix quan una persona creu en les seves capacitats i sap que pot afrontar reptes. La confiança ajuda a prendre decisions, afrontar situacions noves i sentir-se segur en la pròpia experiència i habilitats.",
        "img/confiat.png",
        "confiat",
        "😎"
    );
});

ocultar.addEventListener("click", ()=>{
    canviaEstat(
        "L'emoció intensa apareix quan passa alguna cosa especial o quan s'espera un esdeveniment interessant. Aquesta sensació pot fer que el cor bategui més ràpid, els ulls brillin i la persona vulgui compartir l’experiència amb altres.",
        "img/emocionat.png",
        "emocionat",
        "🥹"
    );
});

mostrar.addEventListener("click", ()=>{
    canviaEstat(
        "La inseguretat es presenta quan algú dubta de si mateix o de les seves decisions. Aquesta emoció pot fer que es senti nerviós o confús, però també ajuda a reflexionar, aprendre i demanar consell per prendre millors decisions.",
        "img/insegur.png",
        "insegur",
        "🫤"
    );
});

recargar.addEventListener("click", () => {
    location.reload()
})

document.addEventListener("DOMContentLoaded", () => {
    // Mostrar confeti d'interrogants blancs al carregar la pàgina
    for (let i = 0; i < 50; i++) {
        generarConfeti("❔");
    }
});
