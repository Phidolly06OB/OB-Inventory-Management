import HistorialInven from "../models/historialIngreso.js";
import Inventario from "../models/inventario.js";

const get = async (req, res) =>{
    try {
        const historial = await HistorialInven.find()

        res.json(historial)
    } catch (error) {
        console.log(error);
    }
}

const newHistorial = async (req, res) =>{
    try {

        const {producto, empleado, cantidad} = req.body

        const productoId = await Inventario.findOne({_id:producto})

         if (!productoId) {
             return res.status(404).json({ mensaje: 'Producto no encontrado' });
         }
        
        

        const operacion = productoId.cantidad + parseInt(cantidad)

        
        const newValores = await Inventario.findOneAndUpdate({_id:productoId}, {$set:{cantidad:operacion}}, { returnOriginal: false })

         const historial = await new HistorialInven({producto, empleado, cantidad})
         historial.save()

         res.json(historial)
    } catch (error) {
        console.log(error);
    }
}


export {
    get,
    newHistorial
}