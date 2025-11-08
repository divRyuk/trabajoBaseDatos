import conectar from "./db/conexion.js"

async function mostrar(){
    const db = await conectar();
    try{
        const coleccion=db.collection("cursos");
        const cadena=await coleccion.find({}).toArray();
        console.log("Conexion exitosa");
        console.table(cadena);
    } catch(error){
        console.log("Error al mostrar los datos",erorr)
    }
}
mostrar();

/*  
    use Cursos
    db.createCollection();
    
*/



//const express= require("exoress");


//console.log("HOLA BD2");
/*async buscar(){
    await

}*/