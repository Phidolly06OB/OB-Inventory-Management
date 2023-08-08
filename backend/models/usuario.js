import mongoose, { Schema } from "mongoose";

const usuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true, "El nombre es requerido"]
    },
    email:{
        type:String,
        required:[true, "El email es requerido"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "La contraseña es requerida"]
    },
    rol:{
        type:String,
        default: 'USER',
    },
    googleSignIn :{
        type:Boolean,
        default: true
    }

},
{
    tiemstamps:true
})

const Usuario = mongoose.model("usuario", usuarioSchema)

export default Usuario