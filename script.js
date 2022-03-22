// Sélectionne tous les éléments dans le HTML avec la classe "checkbox"
const checkboxes = document.querySelectorAll(".checkbox");

// Pour toutes les checkbox...
checkboxes.forEach(checkbox => {
    // Détecter un changement
    checkbox.addEventListener("change", $event => {
        // Filter les résultats
        filter($event.target.value, $event.target.checked);
    });
});

// Fonction nous permettant de filter nos résultats
function filter(value, checked) {
    // Sélectionne tous les éléments dans le HTML avec la classe "arbre"
    const arbres = document.querySelectorAll(".arbre");

    // Pour tous les arbres
    arbres.forEach(arbre => {
        // Verifier que notre checkbox "tous" est coché
        if (value === "tous" && checked === true) {
            // Afficher les arbres
            arbre.className = "arbre";
        } else if (value === "tous" && checked === false) {
            // Cacher les arbres
            arbre.className = "arbre hidden";
        }
    });
}
