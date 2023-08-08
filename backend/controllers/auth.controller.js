import response from "express";
import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs"
import generateJWT from "../helpers/generar.JWT.js"


const login = async (req, res = response) =>{
    const {email, password} = req.body

    try {
        
        const usuario = await Usuario.findOne({email})

        //verificar si el email existe en la base de datos
        if(!usuario){
            res.json({
                msg: "El email no esta registrado",
                success: false
            })
        }

        //verificar si la contraseña es correcta
        const passwordValido = bcryptjs.compareSync(password, usuario.password)

        if(!passwordValido){
            res.json({
                msg: "La contraseña no es correcta",
                success:false
            })
        }

        
        //generar para valdacion JSON WEB TOKEN

        const token = await generateJWT(usuario.id)
        console.log(token);

        
        
        res.json({
            success:true,
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
    }  
}

export {
    login
}