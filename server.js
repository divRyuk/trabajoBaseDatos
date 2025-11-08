// server.js CORREGIDO

// Usamos DOTENV para cargar la variable MONGODB_URI
require("dotenv").config();

const cors = require("cors");
// CORRECCIÓN 1: 'require' en lugar de 'requiere'
const express = require("express"); 
const mongoose = require("mongoose");

// El 'conectar' de la línea 5 no se usa si usas Mongoose, por lo que se elimina
const app = express();

// CORRECCIÓN 2 y 3: Añadir los paréntesis de ejecución y corregir la sintaxis
app.use(cors());
app.use(express.json()); // Ahora sí se ejecuta
app.use(express.urlencoded({ extended: true })); // Sintaxis correcta

// Middleware para manejo de errores (opcional pero buena práctica)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Algo salio Mal" });
});

// CORRECCIÓN 4: Conexión a Mongoose con sintaxis correcta y opciones
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Se mantiene por compatibilidad
    useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado a MongoDB Atlas!"))
.catch(err => console.error("❌ Error de Conexion", err));

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Base de Datos 2 - API del Botánico Corriendo!");
});

// CORRECCIÓN 5: Usar el puerto de Vercel (process.env.PORT) o el 3000 localmente
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en puerto ${PORT}`);
});