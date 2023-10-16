// Extraemos todas las categorias del catalogo
const categorias = catalogo.map((article) => article.category);

// Usamos el método Set() para agrupar las categorías
const categoriasAgrupadas = new Set(categorias);

// Convertimos categoriasAgrupadas en un array
const categoriasArray = Array.from(categoriasAgrupadas);

const elementosLi = categoriasArray.map((categoria) => {
    // Generamos el elemento li
    const li = document.createElement("li")

    // Agregamos el atributo id al elemento a
    const a = document.createElement("a")
    a.id = `"${categoria}"`
    a.textContent = categoria
    a.classList.add("dropdown-item")
    a.href = "#!"
    li.onclick = () => {
        buscarPorCategory(categoria, catalogo)
    }
    li.appendChild(a)

    // Devolvemos el elemento li
    return li
})

// Agregamos los elementos al menú desplegable
const menuCategorias = document.querySelector("#menu-categorias");

for (const li of elementosLi) {
  menuCategorias.appendChild(li);
}