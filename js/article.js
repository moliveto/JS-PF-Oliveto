class Article {
    constructor(id, name, brand, category, price, discount, rating, image) {
        this.id = id,
            this.name = name,
            this.brand = brand,
            this.category = category,
            this.price = price,
            this.discount = discount,
            this.rating = rating,
            this.image = image
    }

    //métodos en class se declaran por fuera del constructor
    mostrarInfoLArticle() {
        console.log(`${this.id} ${this.name}  ${this.price}`)
    }

    exponerEnCatalogo() {
        console.log(`${this.id} ${this.name}  ${this.price}`)
    }
}

let catalogo = []

const cargarCatalogo = async () => {
    const url = "./catalogo.json";
    //await 
       fetch(url)
      .then(response => response.json())
      .then(articles => {
        for (let article of articles){
            let newArticle = new Article(article.id, article.name, article.brand, article.category, article.price, article.discount, article.rating, article.image)
            catalogo.push(newArticle)
        }
        localStorage.setItem("catalogo", JSON.stringify(catalogo))
      });
}

if (localStorage.getItem("catalogo")) {

    for (let article of JSON.parse(localStorage.getItem("catalogo"))) {
        let articuloStorage = new Article(article.id, article.name, article.brand, article.category, article.price, article.discount, article.rating, article.image)
        catalogo.push(articuloStorage)
    }

} else {
    console.log("seteamos por primera vez")
    cargarCatalogo()
}

let productosCarrito = JSON.parse(localStorage.getItem("carrito")) ?? []