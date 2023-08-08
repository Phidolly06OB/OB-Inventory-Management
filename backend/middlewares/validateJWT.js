import { request, response } from "express";
import jwt from "jsonwebtoken"; 
import Usuario from "../models/usuario.js";

const validateJWT = async(req = request, res = response, next) =>{
    const token = req.header('masterKey')

    if(!token){
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {
        const {id} = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY)
        console.log(id);

        const usuario = await Usuario.findOne({id}) 

        console.log(usuario);
        if(!usuario){
            return res.status(401).json({
                msg: 'Token no valido - El usuario no existe en la DB'
            })
        }

        req.usuario = usuario; 
        console.log("req usuario en validate",req.usuario);
        next();


    } catch (error) {
        console.log(error);
    }
}

export default validateJWT
