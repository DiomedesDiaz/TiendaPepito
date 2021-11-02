//Importamos mongoose
import mongoose from "mongoose";

//Creamos el esquema para "Producto"
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  registerDate: { type: Date, default: Date.now },
  stock: Number,
});

//Definimos el modelo

const product = mongoose.model("product", productSchema);

export default product;
