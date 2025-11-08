require("dotenv").config();
const cors = require("cors");
const express=requiere("express");
const mongoose = require("mongoose");
const conectar= requier ("./routers/conexion.js")
const app=express();

app.use(cors());
app.use(express.json);
app.use(express.urlencoded)({extended:true});
app.use((err,req,res,next)=>{console.error(err.stack);res.status(500).json({error:"Algo salio Mal"})})
mongoose.connect(process.env.MONGODB_URI),(
{useUnifiedTopology:true})

.then(()=> console.log("Conectado a Mongo"))
.catch(err => console.error("Error de Conexion",err))

app.get("/",(req,res)=>{res.send("Base de Datos 2")});

app.listen()


//POST: escribe
//GET:mostrar(TODo o algo en particular)
//delete
//update: actualizar
// PUT  - PATCH (escribir)