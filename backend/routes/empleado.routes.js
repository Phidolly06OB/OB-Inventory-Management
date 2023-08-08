import Router from "express"

import { borrar, getAlone, getEmplados, newEmpleado, upEmpl } from "../controllers/empleados.controller.js"
import validarDocumentos from "../middlewares/validate.documents.js"
import { check } from "express-validator"

const router = Router()

router.get("/", getEmplados)

router.get("/:id", getAlone)

router.post("/",[
    validarDocumentos,
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('edad', "La edad es requerida").not().isEmpty(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('email', "El email es requerido").isEmail()
], newEmpleado);

router.delete("/:id", borrar)

router.patch("/:id", upEmpl)

export default router