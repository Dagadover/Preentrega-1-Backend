class ProductManager {
    constructor(){
        this.products = [];
    }

    static id = 0

    addProduct(titulo, descripcion, precio, imagen, codigo, stock){
        for (let i = 0; i < this.products.lenght; i++){
            if (this.products[i].codigo === codigo) {
                console.log('El codigo ${codigo} esta repetido');
                break;
            }
        }

        const newProduct = {
            titulo, 
            descripcion, 
            precio, 
            imagen, 
            codigo, 
            stock, 
        }

        if(!Object.values(newProduct).includes(undefined)){
        ProductManager.id++;
        this.products.push({
            ...newProduct,
            id:ProductManager.id 
        });
        } else{
            console.log("todos los campos son requeridos")
        }
    }

    getProduct(){
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("no encontrado") : console.log(this.existe(id));
        }
    }


const productos = new ProductManager();
//Primera llamada arreglo vacio
console.log(productos.getProduct());

//agregamos producto
productos.addProduct('titulo1', 'descripcion1', 200, "imagen1", "abc123", 5);
productos.addProduct('titulo2', 'descripcion2', 150, "imagen2", "abc124", 2);

//segunda llamada arreglo con producto
console.log(productos.getProduct());

productos.addProduct('titulo3', 'descripcion3', 340, "imagen3", "abc124", 2);

 //busqueda de productos por ID
productos.getProductById(2)

//busqueda por id no encontrado
productos.getProductById(3);
