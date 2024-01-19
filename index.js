let submit = document.getElementById("reserver");
const dates = [
    document.getElementById("date1"),
    document.getElementById("date2"),
    document.getElementById("date3"),
]

const places = document.getElementById("nombrePlaces")
const btn = document.getElementById("plus");
const originalForm = document.getElementById("reservationForm"); 


btn.addEventListener("click", ajouterChamps);
submit.addEventListener("click", enregistrerForm);

function ajouterChamps() {

    addElement()

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
                <option value="${dateId}1">10 février 2024</option>
                <option value="${dateId}2">15 février 2024</option>
                <option value="${dateId}3">20 février 2024</option>
            </select>
            <br>
            <label for="${nombrePlacesId}">Nombre de places :</label>
            <input type="number" name="nombrePlaces" id="${nombrePlacesId}" min="1" required>
        </div>
    `;

    counter++;

    originalForm.insertBefore(newDiv, btn);
}



