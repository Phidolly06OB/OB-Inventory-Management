import Router from "express"
import { check } from "express-validator"

const router = Router()

import { borrar, get, postInven, getAlone, upInven } from "../controllers/inventario.controller.js"
import validarDocumentos from "../middlewares/validate.documents.js"


router.get("/", get)

router.get("/:id", getAlone)

router.post("/",[
    validarDocumentos,
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('descripcion', 'La descripcion es requerida').not().isEmpty(),
    check('cantidad', 'La cantidad es requerida').not().isEmpty()
], postInven)

router.delete("/:id",borrar)

router.patch("/:id", upInven)

export default router