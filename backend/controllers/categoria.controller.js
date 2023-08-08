import Categoria from "../models/categorias.js";

const getCateg = async (req, res) =>{
    try {
        
        const datos = await Categoria.find()

        res.json(datos)

    } catch (error) {
        console.log(error);
    }
}

const getAlone = async (req, res) =>{
    try {
        const inventario = await Categoria.findOne({_id: req.params.id})

        res.json(inventario)
    } catch (error) {
        console.log(error);   
    }
}

const borrar = async (req, res) =>{
    try {
        await Categoria.deleteOne({_id:req.params.id})
        res.send();

    } catch (error) {
        console.log(error);
    }
}

const postCateg = async (req, res) =>{
    try {

        const {nombre, descripcion} = req.body

        //se busca en la base de datos si hay similitud
        const categoriaDB = await Categoria.findOne({ nombre });

        //si existe coincidencia entra al if
        if ( categoriaDB ) {
            return res.status(400).json({
                msg: `La categoria ${ categoriaDB.nombre }, ya existe`
            });
        }

        const newCateg = await new Categoria({nombre, descripcion})
        newCateg.save()

        res.json(newCateg)
    } catch (error) {
        console.log(error);
    }
}

const updCateg = async (req, res) =>{
    try {
        const updEmpl = await Categoria.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updEmpl);
    } catch (error) {
        
    }
}

export {getCateg, postCateg, borrar, getAlone, updCateg}