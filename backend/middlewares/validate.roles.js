const isAdminRole = (req, res, next) =>{

    const { rol, nombre } = req.usuario;

    console.log(rol);
    
    if ( rol !== 'ADMIN' ) {
        return res.status(401).json({
            msg: `${ nombre } no es administrador - No puede hacer esto`
        });
    }

    next();
}

export default  isAdminRole