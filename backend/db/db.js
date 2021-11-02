//Importamos la libreria

import mongoose from "mongoose";

//Configuramos la conexion a la bases de datos
const connectionDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: OK");
  } catch (fail) {
    console.log("Connection with MongoDB: FAILED - ERROR: \n" + fail);
  }
};

//Exportamos para hacerla publica
export default { connectionDb };
