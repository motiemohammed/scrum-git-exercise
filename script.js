
"use strict";

// 1. Liste des pays, de leurs capitales et de leurs continents
const paysDuMonde = {
    "Afrique": [
        { nom: "Maroc", capitale: "Rabat", drapeau: "🇲🇦" },
        { nom: "Sénégal", capitale: "Dakar", drapeau: "🇸🇳" },
        { nom: "Congo", capitale: "Brazzaville", drapeau: "🇨🇬" },
        { nom: "République démocratique du Congo", capitale: "Kinshasa", drapeau: "🇨🇩" },
        { nom: "Côte d'Ivoire", capitale: "Yamoussoukro", drapeau: "🇨🇮" },
        { nom: "Ghana", capitale: "Accra", drapeau: "🇬🇭" },
        { nom: "Kenya", capitale: "Nairobi", drapeau: "🇰🇪" },
        { nom: "Nigeria", capitale: "Abuja", drapeau: "🇳🇬" },
        { nom: "Algérie", capitale: "Alger", drapeau: "🇩🇿" },
        { nom: "Tunisie", capitale: "Tunis", drapeau: "🇹🇳" },
        { nom: "Égypte", capitale: "Le Caire", drapeau: "🇪🇬" },
        { nom: "Cameroun", capitale: "Yaoundé", drapeau: "🇨🇲" },
        { nom: "Madagascar", capitale: "Antananarivo", drapeau: "🇲🇬" },
        { nom: "Éthiopie", capitale: "Addis-Abeba", drapeau: "🇪🇹" },
        { nom: "Rwanda", capitale: "Kigali", drapeau: "🇷🇼" }
    ],

    "Europe": [
        { nom: "France", capitale: "Paris", drapeau: "🇫🇷" },
        { nom: "Espagne", capitale: "Madrid", drapeau: "🇪🇸" },
        { nom: "Italie", capitale: "Rome", drapeau: "🇮🇹" },
        { nom: "Allemagne", capitale: "Berlin", drapeau: "🇩🇪" },
        { nom: "Portugal", capitale: "Lisbonne", drapeau: "🇵🇹" },
        { nom: "Belgique", capitale: "Bruxelles", drapeau: "🇧🇪" },
        { nom: "Suisse", capitale: "Berne", drapeau: "🇨🇭" },
        { nom: "Pays-Bas", capitale: "Amsterdam", drapeau: "🇳🇱" },
        { nom: "Grèce", capitale: "Athènes", drapeau: "🇬🇷" },
        { nom: "Norvège", capitale: "Oslo", drapeau: "🇳🇴" },
        { nom: "Suède", capitale: "Stockholm", drapeau: "🇸🇪" },
        { nom: "Pologne", capitale: "Varsovie", drapeau: "🇵🇱" },
        { nom: "Irlande", capitale: "Dublin", drapeau: "🇮🇪" },
        { nom: "Autriche", capitale: "Vienne", drapeau: "🇦🇹" }
    ],

    "Asie": [
        { nom: "Japon", capitale: "Tokyo", drapeau: "🇯🇵" },
        { nom: "Chine", capitale: "Pékin", drapeau: "🇨🇳" },
        { nom: "Inde", capitale: "New Delhi", drapeau: "🇮🇳" },
        { nom: "Corée du Sud", capitale: "Séoul", drapeau: "🇰🇷" },
        { nom: "Thaïlande", capitale: "Bangkok", drapeau: "🇹🇭" },
        { nom: "Indonésie", capitale: "Jakarta", drapeau: "🇮🇩" },
        { nom: "Arabie saoudite", capitale: "Riyad", drapeau: "🇸🇦" },
        { nom: "Vietnam", capitale: "Hanoï", drapeau: "🇻🇳" },
        { nom: "Pakistan", capitale: "Islamabad", drapeau: "🇵🇰" },
        { nom: "Népal", capitale: "Katmandou", drapeau: "🇳🇵" },
        { nom: "Malaisie", capitale: "Kuala Lumpur", drapeau: "🇲🇾" },
        { nom: "Philippines", capitale: "Manille", drapeau: "🇵🇭" }
    ],

    "Amérique": [
        { nom: "Canada", capitale: "Ottawa", drapeau: "🇨🇦" },
        { nom: "États-Unis", capitale: "Washington", drapeau: "🇺🇸" },
        { nom: "Brésil", capitale: "Brasília", drapeau: "🇧🇷" },
        { nom: "Argentine", capitale: "Buenos Aires", drapeau: "🇦🇷" },
        { nom: "Mexique", capitale: "Mexico", drapeau: "🇲🇽" },
        { nom: "Colombie", capitale: "Bogotá", drapeau: "🇨🇴" },
        { nom: "Chili", capitale: "Santiago", drapeau: "🇨🇱" },
        { nom: "Pérou", capitale: "Lima", drapeau: "🇵🇪" },
        { nom: "Cuba", capitale: "La Havane", drapeau: "🇨🇺" },
        { nom: "Uruguay", capitale: "Montevideo", drapeau: "🇺🇾" },
        { nom: "Équateur", capitale: "Quito", drapeau: "🇪🇨" },
        { nom: "Jamaïque", capitale: "Kingston", drapeau: "🇯🇲" }
    ],

    "Océanie": [
        { nom: "Australie", capitale: "Canberra", drapeau: "🇦🇺" },
        { nom: "Nouvelle-Zélande", capitale: "Wellington", drapeau: "🇳🇿" },
        { nom: "Fidji", capitale: "Suva", drapeau: "🇫🇯" },
        { nom: "Samoa", capitale: "Apia", drapeau: "🇼🇸" },
        { nom: "Tonga", capitale: "Nuku'alofa", drapeau: "🇹🇴" },
        { nom: "Papouasie-Nouvelle-Guinée", capitale: "Port Moresby", drapeau: "🇵🇬" },
        { nom: "Vanuatu", capitale: "Port-Vila", drapeau: "🇻🇺" },
        { nom: "Îles Salomon", capitale: "Honiara", drapeau: "🇸🇧" }
    ]
};


// 2. Récupération des éléments HTML
const continentForm = document.getElementById("continentForm");
const continentSelect = document.getElementById("continent");

const questionSection = document.getElementById("questionSection");
const countryFlag = document.getElementById("countryFlag");
const countryName = document.getElementById("countryName");
const countryContinent = document.getElementById("countryContinent");

const answerForm = document.getElementById("answerForm");
const capitalInput = document.getElementById("capitalInput");
const result = document.getElementById("result");

const scoreElement = document.getElementById("score");
const questionsElement = document.getElementById("questions");
const percentageElement = document.getElementById("percentage");

const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");


// 3. Variables du jeu
let paysActuel = null;
let continentActuel = "";
let dernierPays = "";

let score = 0;
let nombreQuestions = 0;
let reponseDonnee = false;


// 4. Préparer une réponse pour la comparaison
function normaliser(texte) {
    return texte
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("fr")
        .replace(/[-'’]/g, " ")
        .replace(/\s+/g, " ");
}


// 5. Mettre à jour le tableau des scores
function actualiserScore() {
    scoreElement.textContent = score;
    questionsElement.textContent = nombreQuestions;

    const pourcentage = nombreQuestions === 0
        ? 0
        : Math.round((score / nombreQuestions) * 100);

    percentageElement.textContent = pourcentage + " %";
}


// 6. Afficher un message
function afficherResultat(message, type) {
    result.textContent = message;
    result.className = "result " + type;
    result.hidden = false;
}


// 7. Choisir un pays au hasard
function proposerPays() {
    continentActuel = continentSelect.value;

    if (!continentActuel) {
        alert("Veuillez choisir un continent !");
        return;
    }

    const listePays = paysDuMonde[continentActuel];

    // Éviter de proposer deux fois de suite le même pays
    let paysDisponibles = listePays.filter(
        pays => pays.nom !== dernierPays
    );

    // Si nécessaire, utiliser toute la liste
    if (paysDisponibles.length === 0) {
        paysDisponibles = listePays;
    }

    // Tirage aléatoire
    const indexAleatoire = Math.floor(
        Math.random() * paysDisponibles.length
    );

    paysActuel = paysDisponibles[indexAleatoire];
    dernierPays = paysActuel.nom;

    // Afficher le pays choisi
    countryFlag.textContent = paysActuel.drapeau;
    countryName.textContent = paysActuel.nom;
    countryContinent.textContent = "Continent : " + continentActuel;

    // Réinitialiser la question
    capitalInput.value = "";
    capitalInput.disabled = false;
    capitalInput.required = true;

    answerForm.querySelector("button[type='submit']").disabled = false;

    result.hidden = true;
    nextButton.hidden = true;

    reponseDonnee = false;
    questionSection.hidden = false;

    capitalInput.focus();
}


// 8. Quand le joueur choisit un continent et demande un pays
continentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    proposerPays();
});


// 9. Vérifier la capitale saisie
answerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Empêcher de répondre plusieurs fois à la même question
    if (reponseDonnee || paysActuel === null) {
        return;
    }

    const reponse = capitalInput.value.trim();

    if (reponse === "") {
        afficherResultat(
            "Veuillez saisir le nom d'une capitale.",
            "info"
        );
        return;
    }

    nombreQuestions++;
    reponseDonnee = true;

    if (normaliser(reponse) === normaliser(paysActuel.capitale)) {
        score++;

        afficherResultat(
            "Bravo ! " + paysActuel.capitale +
            " est la bonne réponse.",
            "success"
        );
    } else {
        afficherResultat(
            "Incorrect ! La capitale de " +
            paysActuel.nom + " est " +
            paysActuel.capitale + ".",
            "error"
        );
    }

    actualiserScore();

    // Bloquer la réponse jusqu'à la question suivante
    capitalInput.disabled = true;
    answerForm.querySelector("button[type='submit']").disabled = true;

    nextButton.hidden = false;
});


// 10. Passer au pays suivant
nextButton.addEventListener("click", function () {
    proposerPays();
});


// 11. Recommencer toute la partie
resetButton.addEventListener("click", function () {
    score = 0;
    nombreQuestions = 0;

    paysActuel = null;
    dernierPays = "";
    continentActuel = "";
    reponseDonnee = false;

    continentSelect.value = "";
    capitalInput.value = "";
    capitalInput.disabled = false;

    answerForm.querySelector("button[type='submit']").disabled = false;

    questionSection.hidden = true;
    result.hidden = true;
    nextButton.hidden = true;

    actualiserScore();
});
