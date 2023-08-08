import HistorialEgre from "../models/historialEgresoInventario.js"
import Inventario from "../models/inventario.js";

const get = async (req, res) =>{
    try {
        const hisEgre = await HistorialEgre.find();

        res.json(hisEgre)
    } catch (error) {
        console.log(error);
    }
}


const newEgreso = async (req, res) =>{
    try {
        
        const {producto, empleado, cantidad} = req.body

        const productoId = await Inventario.findOne({_id:producto})

        if (!productoId) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        if(parseInt(cantidad) > productoId.cantidad){
            return res.json({
                msg: `No hay Stock Suficiente. Cantidad Disponible: ${productoId.cantidad}`
            })   
        }

        const operacion = productoId.cantidad - parseInt(cantidad)
       
        const newValores = await Inventario.findOneAndUpdate({_id:productoId}, {$set:{cantidad:operacion}}, { returnOriginal: false })

        const historial = await new HistorialEgre({producto, empleado, cantidad})
         historial.save()


        res.json(historial)
    } catch (error) {
        console.log(error);
    }
}


export {
    get,
    newEgreso
}