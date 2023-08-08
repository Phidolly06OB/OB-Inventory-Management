import Router from "express"
import { check } from "express-validator"

const router = Router()

import { get, newEgreso } from "../controllers/historialEgreso.controller.js"
import validarDocumentos from "../middlewares/validate.documents.js"

router.get("/", get)

router.post("/",[
    validarDocumentos,
    check('cantidad', 'La cantidad es requerida').not().isEmpty()
], newEgreso)

export default router