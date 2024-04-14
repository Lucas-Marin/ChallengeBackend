import fs from 'fs';

class ProjectManajer {
  
  constructor() {
    this.products = [];
    this.contadorId = 1; 
  }
  
  

  addProduct(title, decription, price, thumbnail, stock) {
    const newProduct = {
      code: this.contadorId,
      title,
      decription,
      price,
      thumbnail,
      stock,
    };
    this.products.push(newProduct);
    this.contadorId++; 
    if(newProduct){ 
      fs.writeFileSync('log.txt', 'A list of product has been added--- ')
    }
  }
  

  getProductById(code) {
    return this.products.find((product) => product.code === code);
  }

  getProducts() {
    this.products.forEach((product) => {
      console.log(
        `code: ${product.code}, Nombre: ${product.title}, decription: ${product.decription}, price: ${product.price}, thumbnail: ${product.thumbnail}, stock: ${product.stock}`
      );
    });
  }

  deleteProduct(code) {
    return (this.products = this.products.filter(
      (product) => product.code !== code
    ));
  }

  updateProduct(
    code,
    newTitle,
    newPrice,
    newDecription,
    newThumbnail,
    newStock
  ) {
    const product = this.products.find((product) => product.code === code);
    if (product) {
      product.title = newTitle !== undefined ? newTitle : product.Title;
      product.price = newPrice !== undefined ? newPrice : product.price;
      product.decription =
        newThumbnail !== undefined ? newThumbnail : product.thumbnail;
      product.decription = newStock !== undefined ? newStock : product.stock;
      product.decription =
        newDecription !== undefined ? newDecription : product.decription;
      fs.appendFileSync('log.txt','A product has been updated --- ') ,console.log(`Producto ${code} actualizado`);
    } else {
      fs.appendFileSync('./Log', 'An error has occurred when updating a product, please review its syntax --- ') ,console.log(`No se encontró ningún producto ${code}`);
    }
  }
  
}
const fecha = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();
console.log("Programa iniciado el ", fecha, ", a las ", hora)

const groupOfProducts = new ProjectManajer();  

groupOfProducts.addProduct(
  "manzana",
  "rojo",
  10,
  "https://imagen.com/manzana",
  9
);
groupOfProducts.addProduct(
  "naranja",
  "naranja",
  20,
  "https://imagen.com/naranja",
  15
);
groupOfProducts.addProduct(
  "limon",
  "amarillo",
  30,
  "https://imagen.com/limon",
  16
);

groupOfProducts.getProducts();

const product = groupOfProducts.getProductById(5);

if (product) {
  console.log(
    `code: ${product.code}, Name: ${product.title}, Decription: ${product.decription}, Price: ${product.price}, Thumbnail: ${product.thumbnail}, Stock: ${product.stock} `
  );
} else {
  fs.appendFileSync('./log.txt', "An  error occurred while searching for products by their ID --- "), console.log("Not Found, Check ErrorLog");
}

groupOfProducts.updateProduct(
  1,
  "calabaza",
  14,
  "grande y anaranjado",
  "https://imagen.com/calabaza",
  3
);

const logDelete = groupOfProducts.deleteProduct(3);

if(logDelete){
  fs.appendFileSync('./log.txt','a product has been deleted --- ')
}


groupOfProducts.getProducts();




