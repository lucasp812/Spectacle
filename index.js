let submit = document.getElementById("reserver");
let btn = document.getElementById("plus");
let originalForm = document.getElementById("reservationForm"); 
let counter = 1;
let selectedDates = [];

window.onload = function() {
    btn.disabled = true;
    submit.disabled = true;
}

btn.addEventListener("click", ajouterChamps);
submit.addEventListener("click", enregistrerForm);

function checkInputs(date, places) {
    if (date.value && places.value) {
        if (!selectedDates.includes(date.value)) {
            selectedDates.push(date.value);
        }
        if (selectedDates.includes("date1") && selectedDates.includes("date2") && selectedDates.includes("date3")) {
            btn.disabled = true;
            btn.classList.add("disabled");
        } else {
            btn.disabled = false;
            btn.classList.remove("disabled");
        }
        submit.disabled = false;
        submit.classList.remove("disabled");
    } else {
        btn.disabled = true;
        submit.disabled = true;
        btn.classList.add("disabled");
        submit.classList.add("disabled");
    }
}


function ajouterChamps() {
    addElement()
}

function enregistrerForm() {
    alert("Merci d'avoir enregistré les dates et les places.");
}

function addElement() {
    const newDiv = document.createElement("div");
    const dateId = "date" + counter;
    const nombrePlacesId = "nombrePlaces" + counter;

newDiv.innerHTML = `
    <div>
        <label for="${dateId}">Choisissez une date :</label>
        <select name="date" id="${dateId}">
            <option value="" disabled selected>Choisissez une date</option>

            <option value="date1" id=${dateId}1 ${selectedDates.includes("date1") ? "hidden" : ""}>10 février 2024</option>
            <option value="date2" id=${dateId}2 ${selectedDates.includes("date2") ? "hidden" : ""}>15 février 2024</option>
            <option value="date3" id=${dateId}3 ${selectedDates.includes("date3") ? "hidden" : ""}>20 février 2024</option>
        </select>
        <br>
        <label for="${nombrePlacesId}">Nombre de places :</label>
        <input type="number" name="nombrePlaces" id="${nombrePlacesId}" min="1" required>
    </div>
`;
    counter++;
    originalForm.insertBefore(newDiv, btn);

    let date = document.getElementById(dateId);
    let places = document.getElementById(nombrePlacesId);

    date.addEventListener("change", function() { checkInputs(date, places); });
    places.addEventListener("change", function() { checkInputs(date, places); });
}
let date = document.getElementById("date");
let places = document.getElementById("nombrePlaces");
date.addEventListener("change", function() { checkInputs(date, places); });
places.addEventListener("change", function() { checkInputs(date, places); });
