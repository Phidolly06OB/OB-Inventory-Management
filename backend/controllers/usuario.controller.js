import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs"


const getUsers = async (req, res) =>{
    try {
        const usuarios = await Usuario.find()

        res.json(usuarios)
    } catch (error) {
        console.log(error);
    }
}

const postUser = async (req, res) =>{
    try {
        const {nombre, email, password, rol} = req.body

        const usuarioDB = await Usuario.findOne({email})

        if(usuarioDB){
            res.json({
                msg: `El email existente`
            })
        }

        //se asigna el valor 'USER' por defecto si rol no se proporciona o esta en blanco, se usa || en caso de que rol no este definido o sea falso
        const usuario = new Usuario({nombre, email, password, rol: rol || 'USER'})

        

        const salt = bcryptjs.genSaltSync()
        usuario.password  =bcryptjs.hashSync(password, salt)



        await usuario.save()

        res.json({usuario})


    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Usuario.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

export {
    postUser,
    getUsers,
    borrar
}