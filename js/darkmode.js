let btnToggle = document.getElementById("btnToggle")

// Inicializamos el storage con valores por defecto si no existe
if (localStorage.getItem("modoOscuro")) {
    //si existe la calve en el storage
} else {
    localStorage.setItem("modoOscuro", true)
}

if (JSON.parse(localStorage.getItem("modoOscuro")) == true) {
    themeDark(true)
}
else {
    themeDark(false)
}

function themeDark(toDark) {
    const html = document.querySelector("html");

    if (toDark) {
        console.log("tema dark")
        html.setAttribute("data-bs-theme", "dark");
        btnToggle.classList.remove("bi-moon")
        btnToggle.classList.add("fa-sun")
    }
    else {
        console.log("tema light")
        html.setAttribute("data-bs-theme", "light");
        btnToggle.classList.remove("fa-sun")
        btnToggle.classList.add("bi-moon")
    }
}

btnToggle.addEventListener("click", () => {
    if (JSON.parse(localStorage.getItem("modoOscuro")) == false) {
        themeDark(true)
        localStorage.setItem("modoOscuro", true)
    }
    else if (JSON.parse(localStorage.getItem("modoOscuro")) == true) {
        themeDark(false)
        localStorage.setItem("modoOscuro", false)
    }
})
