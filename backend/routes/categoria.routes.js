import Router from "express"
import { borrar, getAlone, getCateg, postCateg, updCateg } from "../controllers/categoria.controller.js"
import validarDocumentos from "../middlewares/validate.documents.js";
import { check } from "express-validator";
const router = Router()

router.get("/", getCateg);

router.get("/:id", getAlone)

router.delete("/:id", borrar)

router.post("/",[
    validarDocumentos,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es requerido').isEmail()
], postCateg)

router.patch("/:id", updCateg)

export default router