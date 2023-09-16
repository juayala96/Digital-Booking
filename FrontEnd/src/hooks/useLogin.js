
import jwt from 'jwt-decode'
const useLogin = () => {

    const token = localStorage.getItem("userToken")
    
    if (token){
        let decoded = jwt(token)
        const avatar = (decoded.name.charAt(0)+decoded.lastName.charAt(0)).toUpperCase()
        decoded.avatar = avatar
        decoded.tokenJWT = token
        return decoded
    }
    return

};

export default useLogin;