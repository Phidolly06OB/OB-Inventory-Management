import Router from "express"
import {check} from "express-validator"
import validarDocumentos from "../middlewares/validate.documents.js"

const router = Router()

import { borrar, getUsers, postUser } from "../controllers/usuario.controller.js"


router.get("/", getUsers)

router.post("/",[
    check('nombre', "El nombre no es valido").not().isEmpty(),
    check('email', "El correo no es valido").isEmail(),
    validarDocumentos
], postUser)

router.delete("/:id", borrar)

export default router