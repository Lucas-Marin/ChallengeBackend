class ProjectManajer {
    constructor() {
      this.productos = [];
      this.contadorId = 1; // Inicializar el contador de ID en 1
    }
  
    addProduct(title,decription, price, thumbnail, stock) {
      const nuevoProducto = {
        code: this.contadorId,
        title,
        decription,
        price,
        thumbnail,
        stock,
      };
      this.productos.push(nuevoProducto);
      this.contadorId++; // Incrementar el contador de ID para el siguiente producto
    }
    getProductById(code) {
        return this.productos.find(producto => producto.code === code);
      }
  
    getProducts() {
      this.productos.forEach(producto => {
        console.log(`code: ${producto.code}, Nombre: ${producto.title}, decription: ${producto.decription}, price: ${producto.price}, thumbnail: ${producto.thumbnail}, stock: ${producto.stock}`);
      });
    }
  }
  const grupoProductos = new ProjectManajer();

grupoProductos.addProduct('manzana', 'rojo', 10, 'https://imagen.com/manzana', 9);
grupoProductos.addProduct('naranja', 'naranja',20, 'https://imagen.com/naranja', 15);
grupoProductos.addProduct('limon', 'amarillo', 30, 'https://imagen.com/limon',16);

grupoProductos.getProducts();

const producto = grupoProductos.getProductById(4);

if (producto) {
  console.log(`code: ${producto.code}, Nombre: ${producto.title}, decription: ${producto.decription}, price: ${producto.price}, thumbnail: ${producto.thumbnail}, stock: ${producto.stock} `);
} else {
  console.log("Not Found");
}