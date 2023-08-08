import mongoose from "mongoose";

const HistorialEgresados = mongoose.Schema({
    producto:{
        type:String,
        required:true,
        trim:true
    },
    empleado:{
        type:Number,
        required:true,
        trim:true
    },
    cantidad:{
        type:Number,
        required:true,
        trim:true
    }
},
{
    timestamps:true
}
)

const HistorialEgre = mongoose.model("historialegresado", HistorialEgresados)

export default HistorialEgre