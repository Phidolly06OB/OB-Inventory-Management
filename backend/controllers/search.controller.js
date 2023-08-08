import response from "express"
import {Types} from 'mongoose'

const ObjectId = Types.ObjectId

import Categoria from "../models/categorias.js";

const allowedCollections = ['categorias']

const searchCategorias = async( criterio = '', res = response ) => {

    const isMongoID = ObjectId.isValid( criterio ); // TRUE 

    if ( isMongoID ) {
        const categoria = await Categoria.findById(criterio);
        return res.json({
            results: ( categoria ) ? [ categoria ] : []
        });
    }

    const regex = new RegExp( criterio, 'i' );
    const categorias = await Categoria.find({ nombre: regex});

    res.json({
        results: categorias
    });

}

const search = ( req, res = response ) => {
    
    const { coleccion, criterio  } = req.params;

    if (!allowedCollections.includes(coleccion)){
        return res.status(400).json({
            msg: `Solo estan Permitidas estas Colecciones: ${allowedCollections}`
        })
    }

    switch (coleccion) {
        case 'categorias':
            searchCategorias(criterio, res);
        break;

        default:
            res.status(500).json({
                msg: 'This search doesnt exists'
            })
    }

  

}

export default search
