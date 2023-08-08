import mongoose from "mongoose";

const HistorialInvenSchema = mongoose.Schema({
    producto:{
        type: String,
        required:true,
        trim:true
    },
    empleado:{
        type:Number,
        required:true,
        trim:true
    },
    cantidad: {
        type:Number,
        required: true,
        trim: true
    }

},
{
    timestamps:true
})

const HistorialInven = mongoose.model("historialInventario", HistorialInvenSchema)

export default HistorialInven