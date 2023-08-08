import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    edad:{
        type:Number,
        required:true,
        trim:true
    },
    documento:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    }
},
{
    timestamps:true
})

const Empleados = mongoose.model("empleado", empleadosSchema)

export default Empleados