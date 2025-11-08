import {MongoClient} from "mongodb";
const url = "mongodb://localhost:27017";
const nombreBase="Cursos";

async function conectar(){
    try{
    const cliente=new MongoClient(url);
    //console.log(cliente);
    await cliente.connect();
    const db=cliente.db("nombreBase");
    //return db;
}catch(erorr){
    console.log("Error de conexion",error);
}
}


/*Schema de cursos
nombre:String
desarrolladores:Number
disponible: boolean

{"nombre":"JavaScript",
"Desarrolladores":5,
"disponible"":true}
*/
/*
db.Cursos.insertOne({{"nombre":"JavaScript","Desarrolladores":5,"disponible"":true}})*/