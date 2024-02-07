let submit = document.getElementById("reserver");
let btn = document.getElementById("plus");
let originalForm = document.getElementById("reservationForm"); 
let counter = 1;
let selectedDates = [];
let date = document.getElementById("date");
let places = document.getElementById("nombrePlaces");
let deleteButton = document.querySelector(".deleteReservation");

window.onload = function() {
    btn.disabled = true;
    submit.disabled = true;
}

btn.addEventListener("click", ajouterChamps);
submit.addEventListener("click", enregistrerForm);

function checkInputs(date, places, deleteButton) {
    if (date && places && deleteButton && date.value && places.value) {
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
        deleteButton.classList.remove("hidden");
    } else {
        if (btn) {
            btn.disabled = true;
            btn.classList.add("disabled");
        }
        if (submit) {
            submit.disabled = true;
            submit.classList.add("disabled");
        }
        if (deleteButton) {
            deleteButton.classList.add("hidden");
        }
    }
}

function ajouterChamps() {
    addElement();
}

function enregistrerForm() {
    alert("Merci d'avoir enregistré les dates et les places.");
}

function addElement() {
    // Désactiver tous les autres champs de sélection de date
    let dateInputs = document.querySelectorAll('select[name="date"]');
    dateInputs.forEach((dateInput) => {
        dateInput.disabled = true;
    });

    const newDiv = document.createElement("div");
    const dateId = "date" + counter;
    const nombrePlacesId = "nombrePlaces" + counter;
    const deleteButtonId = "delete" + counter;

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
            <button id="${deleteButtonId}" class="deleteButton hidden">Supprimer</button>
        </div>
    `;
    counter++;
    originalForm.insertBefore(newDiv, btn);

    let date = document.getElementById(dateId);
    let places = document.getElementById(nombrePlacesId);
    let deleteButton = document.getElementById(deleteButtonId);

    date.addEventListener("change", function() { checkInputs(date, places, deleteButton); });
    places.addEventListener("change", function() { checkInputs(date, places, deleteButton); });
    deleteButton.addEventListener("click", function() { deleteReservation(this); });
}

function deleteReservation(button) {
    let date = button.parentNode.querySelector('select').value;
    let index = selectedDates.indexOf(date);
    if (index !== -1) {
        selectedDates.splice(index, 1);
    }
    button.parentNode.remove();
    let dateInputs = document.querySelectorAll('select[name="date"]');
    dateInputs.forEach((dateInput) => {
        dateInput.disabled = true;
    });

    let lastDateInput = dateInputs[dateInputs.length - 1];
    if (lastDateInput) {
        lastDateInput.disabled = false;
    }
    let reservations = document.querySelectorAll("#reservationForm > div");
    reservations.forEach((reservation) => {
        let dateInput = reservation.querySelector('select');
        let placesInput = reservation.querySelector('input[type="number"]');
        let deleteButton = reservation.querySelector('.deleteButton');
        if (dateInput && placesInput && deleteButton) {
            checkInputs(dateInput, placesInput, deleteButton);
        }
    });
}

date.addEventListener("change", function() { checkInputs(date, places, deleteButton); });
places.addEventListener("change", function() { checkInputs(date, places, deleteButton); });
