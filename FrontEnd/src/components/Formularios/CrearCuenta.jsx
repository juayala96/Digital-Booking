import{Link, useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import styles from "./formularios.module.css"
import userRoleList from '../../mocks/api/usuario.json'
import { userInfoContext } from '../../App'
import ModalMessage from '../ModalMessage/ModalMessage';
import Input from '../Input/InputText/Input';
import SpecialInput from '../Input/SpecialInput/SpecialInput';
import InputSelect from '../Input/InputSelect/InputSelect';
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const CrearCuenta = () =>{

    const navigate = useNavigate()
    const userInfo = useContext(userInfoContext)
    
    useEffect(()=>{
        if(userInfo.name){
            navigate('/')
        }
    }, [userInfo.name])

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [contraseniaC, setContraseniaC] = useState('')
    const [errorConfVacio,setErrorConfVacio] = useState(false)
    const [errorConfDistinto,setErrorConfDistinto] = useState(false)
    const [errorContrasenia,setErrorContrasenia] = useState(false)
    const [errorCorreo,setErrorCorreo] = useState(false)   
    const [errorNombreVacio,setErrorNombreVacio] = useState(false)
    const [errorApellidoVacio,setErrorApellidoVacio] = useState(false)
    const [errorCorreoVacio,setErrorCorreoVacio] = useState(false)
    const [errorContraseniaVacio,setErrorContraseniaVacio] = useState(false)
    const [errorRegister, setErrorRegister] = useState(false)
    const [userRoleSelected, setUserRoleSelected] = useState(-1)
    const [errorUserRoleVacio, setErrorUserRoleVacio] = useState(false)
    const [succed, setSucced] = useState(false)

    const succedMessage = {
    path:"/Login",
    succed:true,
    title:"¡Muchas Gracias!",
    body: "El usuario ha sido creado con éxito",
    text: ""
    }

    const failedMessage = {
    path:"",
    succed:false,
    title:"¡Lo sentimos!",
    body: "El usuario NO ha sido creado con éxito",
    text: "Verifique sus datos y vuelva a intentarlo"
    }


const handleSubmit = (event) =>{
        event.preventDefault()
        setErrorNombreVacio(nombre === '')
        setErrorApellidoVacio(apellido ==='')
        setErrorCorreoVacio(correo ==='')
        setErrorContraseniaVacio(contrasenia ==='')
        setErrorConfVacio(contraseniaC ==='')
        setErrorUserRoleVacio(userRoleSelected ===-1)

        if(nombre !== '' && apellido !=='' && correo!=='' && contrasenia!=='' && userRoleSelected!==-1){
            if(contrasenia.length+1 < 6){ 
                setErrorContrasenia(true)
                setErrorConfDistinto(false)
            }else{if (contraseniaC === '') {
                setErrorConfVacio(true)
                setErrorConfDistinto(false)
                    }else {if (contrasenia !== contraseniaC){
                    setErrorConfDistinto(true);
                    setErrorContrasenia(false)
                    setErrorConfVacio(false)
                    setContraseniaC('')
                    setContrasenia('')
                    var element = document.getElementById('confirm_password');
                    element.classList.toggle('error_input');
                        }else { 
                            setErrorConfDistinto(false);
                            setErrorConfVacio(false)
                            setErrorContrasenia(false)
                            setErrorUserRoleVacio(false)
                            const userRole = userRoleList.filter(role=>role.id===userRoleSelected)
                            
                            const data = {
                                nombre: nombre,
                                apellido: apellido,
                                email: correo,
                                password: contrasenia,
                                usuarioRol: {
                                    id: userRoleSelected,
                                    nombre: userRole.nombre,
                                    descripcion: userRole.descripcion
                                }
                            }
                            console.log(data)
                            fetch('http://52.14.221.16:8080/usuarios', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Success:', data);
                                setErrorRegister(false)
                                setSucced(true)
                                navigate(window.scrollTo(0, 0))
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                setErrorRegister(true)
                                setSucced(false)
                            });
                    }
                }
            }
    }
}

    const isEmail = (email) =>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const onChangeCorreo=(e) =>{
        setCorreo(e.target.value)
        if(!isEmail(correo)){
            setErrorCorreo(true)
            var element = document.getElementById('email');
            element.classList.toggle('error_input');
        } else {setErrorCorreo(false)}
    }

    const onChangeContrasenia=(e) =>{
        setContrasenia(e.target.value)
        if(contrasenia.length+1 < 6) {
            setErrorContrasenia(true);
            var element = document.getElementById('password');
            element.classList.toggle('error_input');
        } else setErrorContrasenia(false)
    }

    const onChangeConfirmacion=(e) =>{
        setContraseniaC(e.target.value)
    }

    const HandleUserRoleSelected = (id)=> {
        setUserRoleSelected(id)
        setErrorUserRoleVacio(false)
        console.log("USER ROLE ID", id)
    }


    return(
        <div className={styles.register_form}>     
                    <form className={styles.form_container} onSubmit={handleSubmit}>

                        <h1>Crear cuenta</h1>
                        <div className={styles.form_component_name_lastname}>
                            <Input label={"Nombre"} handleValue={setNombre} valueContent={nombre} obligatory={errorNombreVacio}/>
                            <Input label={"Apellido"} handleValue={setApellido} valueContent={apellido} obligatory={errorApellidoVacio}/>
                        </div>

                        <SpecialInput label={"Correo electrónico"} inputOnChange={onChangeCorreo} valueContent={correo} obligatory={errorCorreoVacio} validation={errorCorreo} messageValidation={"El correo no es válido"} inputType={'email'} inputId={'email'}/>
                        <SpecialInput label={"Contraseña"} inputOnChange={onChangeContrasenia} valueContent={contrasenia} obligatory={errorContraseniaVacio} validation={errorContrasenia} messageValidation={"La contraseña debe contener al menos 6 caracteres"} inputType={"password"} inputId={"password"} />
                        <SpecialInput label={"Confirmar contraseña"} inputOnChange={onChangeConfirmacion} valueContent={contraseniaC} obligatory={errorConfVacio} validation={errorConfDistinto} messageValidation={"Las contraseñas ingresadas no coinciden"} inputType={"password"} inputId={"confirm_password"} />

                        <InputSelect label={"Elegí qué clase de usuario querés ser"} handleSelected={HandleUserRoleSelected} infoList={userRoleList.map((element) => {return {id : element.id, value : element.descripcion}})} obligatory={errorUserRoleVacio} />
                        {userRoleSelected===1&&(<div  className={styles.warning_user}>Te recordamos que los usuarios administradores no pueden realizar reservas</div>)}
                        {userRoleSelected===2&&(<div  className={styles.warning_user}>Te recordamos que los usuarios inquilinos no pueden administrar propiedades</div>)}
                        
                        
                        {errorRegister&&(<ModalMessage handleShowMessage={setErrorRegister} modalInfo={failedMessage}/>)}
                        {succed&&(<ModalMessage handleShowMessage={setSucced} modalInfo={succedMessage}/>)}                            

                        <div className={styles.button_submit}>   
                            <PrimaryButton text={"Crear cuenta"} buttonType={"submit"} />
                        </div> 
                        <div className={styles.switch_path_component}>
                        <p>¿Ya tienes una cuenta? &nbsp;</p> <Link to='/login'><p className={styles.switch_path_link}>Iniciar sesión</p></Link>
                        </div>
                    </form>
            
        </div>
    )
}
export default CrearCuenta