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

function addElement() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div>
            <label for="date">Choisissez une date :</label>
            <select name="date" id="date">
                <option value="date1" id="date1">10 fevrier 2024</option>
                <option value="date2" id="date2">15 fevrier 2024</option>
                <option value="date3" id="date3">20 fevrier 2024</option>
            </select>
            <br>
            <label for="nombrePlaces">Nombre de places :</label>
            <input type="number" name="nombrePlaces" id="nombrePlaces" min="1" required>
        </div>
    `;
    originalForm.insertBefore(newDiv, btn);
}


