const mongoose =require("mongoose");
const dataSchema =new mongoose.Schema({
    nombre:{String},
    direccion:{String},
    edad:{Integer}
})

module.exports = mongoose.model("Datos",dataSchema);








/*
"nombre":"";
"direccion":"";
"edad":30;
*/

/*{
    nombre:{String},
    direccion:{String},
    edad:{Integer}
}*/