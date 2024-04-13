class ProjectManajer {
  constructor() {
    this.products = [];
    this.contadorId = 1; // Inicializar el contador de ID en 1
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
    this.contadorId++; // Incrementar el contador de ID para el siguiente producto
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
   return this.products = this.products.filter((product) => product.code !== code);
  }

  updateProduct(code, newTitle, newPrice, newDecription, newThumbnail, newStock) {
    const product = this.products.find(product => product.code === code);
    if (product) {
      product.title = newTitle !== undefined ? newTitle : product.Title;
      product.price = newPrice !== undefined ? newPrice : product.price;
      product.decription = newThumbnail !== undefined ? newThumbnail : product.thumbnail;
      product.decription = newStock !== undefined ? newStock : product.stock;
      product.decription = newDecription !== undefined ? newDecription : product.decription;
      console.log(`Producto ${code} actualizado`);
    } else {
      console.log(`No se encontró ningún producto ${code}`);
    }
  }
}
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
  console.log("Not Found");
}

groupOfProducts.updateProduct(1,'calabaza',14 ,'grande y anaranjado','https://imagen.com/calabaza',3 );

groupOfProducts.getProducts();

groupOfProducts.deleteProduct(3);

groupOfProducts.getProducts();