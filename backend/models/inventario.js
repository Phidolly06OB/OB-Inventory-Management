import {Schema, model} from "mongoose";

const inventarioSchema = Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    },
    categoria:{
        type:Schema.Types.ObjectId,
        ref: 'categorias',
        required:true
    },
    cantidad:{
        type:Number,
        required:true,
        trim:true
    }
},
{
    timestamps:true
})

const Inventario = model("inventario", inventarioSchema)

export default Inventario