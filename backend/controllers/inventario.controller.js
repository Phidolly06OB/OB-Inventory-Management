import Inventario from "../models/inventario.js";


const get = async (req, res) =>{
    try {
        const inventario = await Inventario.find()

        res.json(inventario)
    } catch (error) {
        console.log(error);   
    }
}

const getAlone = async (req, res) =>{
    try {
        const inventario = await Inventario.findOne({_id: req.params.id})

        res.json(inventario)
    } catch (error) {
        console.log(error);   
    }
}

const postInven = async (req, res) =>{
    try {
        const nuevoInven = await new Inventario(req.body)
        nuevoInven.save()

        res.json(nuevoInven)
        
    } catch (error) {
        console.log(error);
    }
}

const upInven = async (req, res) =>{
    try {
        const updInven = await Inventario.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updInven);
    } catch (error) {
        
    }
}

const borrar = async (req, res) =>{
    try {
        await Inventario.deleteOne({_id:req.params.id})
        res.send();
    } catch (error) {
        console.log(error);
    }
}

export {
    postInven,
    get,
    upInven,
    borrar,
    getAlone
}