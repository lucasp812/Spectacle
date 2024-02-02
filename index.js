let submit = document.getElementById("reserver");
const dates = new Map([
    ["date1", document.getElementById("date1")],
    ["date2", document.getElementById("date2")],
    ["date3", document.getElementById("date3")]
]);

const places = document.getElementById("nombrePlaces")
const nbrplace = document.getElementById("nombrePlaces").value
const btn = document.getElementById("plus");
const originalForm = document.getElementById("reservationForm"); 

btn.addEventListener("click", ajouterChamps);
submit.addEventListener("click", enregistrerForm);

// Récupérez les éléments
let date = document.getElementById("date");

// Désactivez les boutons au chargement de la page
window.onload = function() {
    btn.disabled = true;
    submit.disabled = true;
}

// Ajoutez un écouteur d'événements pour vérifier si les deux champs ont des valeurs
date.addEventListener("change", checkInputs);
places.addEventListener("change", checkInputs);

function checkInputs() {
    // Si les deux champs ont des valeurs, activez les boutons
    if (date.value && places.value) {
        btn.disabled = false;
        submit.disabled = false;
    } else {
        // Sinon, désactivez les boutons
        btn.disabled = true;
        submit.disabled = true;
    }
}

function ajouterChamps() {
    addElement()
}

places.addEventListener("keypress", disable())

function disable(){
    console.log(nbrplace)
    if (nbrplace < 0){
        btn.classList.add("disable")
        plus.classList.add("disable")
    }
}

console.log(dates)
function enregistrerForm() {
    alert("Merci d'avoir enregistré les dates et les places.");
    console.log(dates)
}

let counter = 1;

function addElement() {
    const newDiv = document.createElement("div");

    const dateId = "date" + counter;
    const nombrePlacesId = "nombrePlaces" + counter;

    newDiv.innerHTML = `
        <div>
            <label for="${dateId}">Choisissez une date :</label>
            <select name="date" id="${dateId}">
                <option value="${dateId}1" id=${dateId}1>10 février 2024</option>
                <option value="${dateId}2" id=${dateId}2>15 février 2024</option>
                <option value="${dateId}3" id=${dateId}2>20 février 2024</option>
            </select>
            <br>
            <label for="${nombrePlacesId}">Nombre de places :</label>
            <input type="number" name="nombrePlaces" id="${nombrePlacesId}" min="1" required>
        </div>
    `;
    console.log(dateId)

    counter++;
    originalForm.insertBefore(newDiv, btn);
}
