import Router from "express"
import { check } from "express-validator"

const router = Router()

import {get, newHistorial} from "../controllers/historialIngreso.controller.js"
import validarDocumentos from "../middlewares/validate.documents.js"

router.get("/", get)

router.post("/",[
    validarDocumentos,
    check('cantidad', 'La cantidad es requerida').not().isEmpty()
], newHistorial)

export default router