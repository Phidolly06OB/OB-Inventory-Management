import mongoose from "mongoose";

const rolesSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true, "El Rol es obligatorio"]
    }
})

const Roles = mongoose.model("role", rolesSchema)

export default Roles