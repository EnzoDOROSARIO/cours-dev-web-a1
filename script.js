const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", $event => {
        filter($event.target.value, $event.target.checked);
    });
});

function filter(value, checked) {
    const arbres = document.querySelectorAll(".arbre");

    arbres.forEach(arbre => {
        if (value === "tous" && checked === true) {
            arbre.className = "arbre";
        } else if (value === "tous" && checked === false) {
            arbre.className = "arbre hidden";
        }
    });
}
