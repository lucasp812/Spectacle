let submit = document.getElementById("reserver");
const ajouter = document.getElementById("plus");
const originalForm = document.getElementById("reservationForm"); // Utiliser l'ID du formulaire

ajouter.addEventListener("click", ajouterForm);
submit.addEventListener("click", enregistrerForm);

function ajouterForm() {
    const addedForm = originalForm.cloneNode(true);
    originalForm.parentNode.insertBefore(addedForm, originalForm.nextSibling);
}

function enregistrerForm() {
    alert("Merci d'avoir enregistré les dates et les places.");
}
