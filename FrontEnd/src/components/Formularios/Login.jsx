import{Link, useNavigate } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import styles from "./formularios.module.css"
import { userInfoContext } from '../../App'
import jwt from 'jwt-decode'
import SpecialInput from '../Input/SpecialInput/SpecialInput'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Login = ({handleUserLogged}) =>{

    const navigate = useNavigate()
    const userInfo = useContext(userInfoContext)
    
    useEffect(()=>{
        if(userInfo.name){
            navigate('/')
        }
    }, [userInfo.name])

    const [correo, setCorreo] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [errorForm,setErrorForm] = useState(false)
    const prodId=localStorage.getItem('idProduct')
    const prodName=localStorage.getItem('nameProduct')
    
    const usuario= {
        email: correo,
        password: contrasenia
    }

        const handleSubmit = (event) =>{
        event.preventDefault()
                        fetch('http://52.14.221.16:8080/auth/token', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(usuario)
                            })
                            .then(response => {
                                if (response.status!=200){
                                    throw new Error(response.error)
                                } 
                                return response.json()
                            })
                            .then(data => {

                                console.log('Success:', data);
                                const token = data.respuesta.token
                                const decoded = jwt(token)
                                
                            //jwt 

                                const userObj = {
                                    tokenJWT : token,
                                    name : decoded.name,
                                    lastName : decoded.lastName,
                                    id : decoded.id,
                                    idRole: decoded.idRole,
                                    sub : decoded.sub
                                }

                                console.log("INFO: ", userObj)
                                setErrorForm(false)
                                handleUserLogged(userObj)
                            
                            // redireccionamiento a home o reserva 
                                prodId ? 
                                    navigate(`/products/id=${prodId}/${prodName}/booking-detail`) 
                                    : 
                                    navigate('/');
                                console.log("Usuario logueado con exito")
                                })  

                            .catch((error) => {
                                console.error('Error:', error);
                                setErrorForm(true); 
                                setContrasenia(''); 
                                setCorreo('')
                            });




    }

    const onChangeCorreo= (e) =>{
        setCorreo(e.target.value)
    }
    const onChangeContrasenia= (e) =>{
        setContrasenia(e.target.value)
    }

    return(
        <div className={styles.login_form}>
        <div className={styles.form_container}>
            {prodId&&(
                <div className={styles.warning_booking}>
                    <div className={styles.warning}>!</div>
                    <p>Para realizar una reserva necesitas estar logueado</p>
                </div>)}
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <SpecialInput label={"Correo electrónico"} inputOnChange={onChangeCorreo} valueContent={correo} obligatory={false} validation={false}  inputType={"email"}/>
                <SpecialInput label={"Contraseña"} inputOnChange={onChangeContrasenia} valueContent={contrasenia} obligatory={false} validation={errorForm} messageValidation={"Por favor vuelva a intentarlo, sus credenciales son inválidas"} inputType={"password"}/>

            <div className={styles.button_submit}>   
                <PrimaryButton buttonType={"submit"} text={"Ingresar"}/>
            </div> 
            
                <div className={styles.switch_path_component}>
                <p>¿Aún no tenés cuenta?&nbsp;</p><Link to='/register'><p className={styles.switch_path_link}> Registrate</p></Link>
                </div>

            </form>
        </div>
        </div>
    )
}
export default Login
