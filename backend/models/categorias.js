import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true, "Es obligatorio el nombre"],
        unique: true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    }
},
{
    timestamps:true
}       
);

const Categoria = mongoose.model("categoria", categoriaSchema);

export default Categoria