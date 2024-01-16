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

    

}

console.log(dates)
function enregistrerForm() {
    alert("Merci d'avoir enregistré les dates et les places.");
    console.log(dates)
}

function addElement(){



const newInput = document.createElement("input")
document.body.insertBefore(newInput, places)
}

