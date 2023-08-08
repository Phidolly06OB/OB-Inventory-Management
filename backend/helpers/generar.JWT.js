import jwt from "jsonwebtoken"

const generateJWT = async (uid = '') =>{
    try {
        return new Promise ((resolve, reject) =>{

            const payload = {uid}

            jwt.sign(payload, process.env.SECRET_OR_PRIVATE_KEY, {
                expiresIn: '20m'
            }, (error, token)=>{
                if(error){
                    console.log(error);
                    reject('No se pudo generar el JSON WEB TOKEN')
                }else{
                    resolve(token)
                }
            })

        })
    } catch (error) {
        console.log(error);
    }
}

export default generateJWT