import React from 'react'
import { useState, useEffect, useContext } from 'react'
import styles from './MyNewProduct.module.css'
import CheckboxList from '../../Input/CheckboxList/CheckboxList'
import ItemListAdd from '../../Input/ItemListAdd/ItemListAdd'
import { userInfoContext } from "../../../App";
import ModalMessage from '../../ModalMessage/ModalMessage'
import { useNavigate } from 'react-router-dom'
import Input from '../../Input/InputText/Input'
import InputSelect from '../../Input/InputSelect/InputSelect'
import InputTextArea from '../../Input/InputTextArea/InputTextArea'
import PrimaryButton from '../../PrimaryButton/PrimaryButton'

export default function MyNewProduct () {

    const userInfo = useContext(userInfoContext)
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [titleAlert, setTitleAlert] = useState(false)

    const [address, setAddress] = useState('')
    const [addressAlert, setAddressAlert] = useState('')

    const [categoryList, setCategoryList] = useState([])
    const [categorySelected, setCategorySelected] = useState()
    const [categorySelectedAlert, setCategorySelectedAlert] = useState(false)

    const [cityList, setCityList] = useState([])
    const [citySelected, setCitySelected] = useState()
    const [citySelectedAlert, setCitySelectedAlert] = useState(false)

    const [amenityList, setAmenityList] = useState([])
    const [selectedAmenities, setSelectedAmenities] = useState([])
    const [selectedAmenitiesAlert, setSelectedAmenitiesAlert] = useState([])

    const [titleDescription, setTitleDescription] = useState('')
    const [titleDescriptionAlert, setTitleDescriptionAlert] = useState(false)

    const [description, setDescription] = useState('')
    const [descriptionAlert, setDescriptionAlert] = useState(false)

    const [rules, setRules] = useState(
        "-Check-out: 10:00. -No se permiten fiestas. No se permite fumar"
    )
    const [rulesAlert, setRulesAlert] = useState(false)
    const [security, setSecurity] = useState(
        "-Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. -Contamos con detector de monóxido de carbono. -Contamos con caja fuerte."
    )
        const [securityAlert, setSecurityAlert] = useState(false)

    const [cancelation, setCancelation] = useState(
        "-Posibilidad de cancelar hasta 24hs antes de la reserva."
    )
    const [cancelationAlert, setCancelationAlert] = useState(false)

    const [imageList, setImageList] = useState([])
    const [imageListAlert, setImageListAlert] = useState(false)

    
    const [showProductCreated, setShowProductCreated] = useState(false)
    const [showProductFailed, setShowProductFailed] = useState(false)
    
    const succedMessage = {
        path:"/",
        icon:"../../assets/succed.png",
        title:"¡Felicidades!",
        body: "Su producto se ha creado con éxito",
        text: ""
        }
    const failedMessage = {
        path:"",
        icon:"../../assets/error.png",
        title:"¡Lo sentimos!",
        body: "Su producto NO se ha creado con éxito",
        text: "Por favor, intente más tarde"
        }

    const urlCiudades = 'http://52.14.221.16:8080/ciudades'
    const urlCategorias = 'http://52.14.221.16:8080/categorias'
    const urlAmenity = 'http://52.14.221.16:8080/caracteristicas'

    const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => { 
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCiudades, settings)
                  const data = await response.json()
                  setCityList(data) 
              } catch (error){
                  console.error(error)
              }
            })
            }, [urlCiudades])

    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCategorias, settings)
                  const data = await response.json()
                  setCategoryList(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [urlCategorias])

    useEffect(() => {
        Promise.resolve().then(async function(){
            try{
                const response = await fetch (urlAmenity, settings)
                const data = await response.json()
                setAmenityList(data) 
            } catch (error){
                console.error(error)
            }
        })
            }, [urlAmenity])

    const HandleSelectCategory = (id) =>{
        setCategorySelected(id)
    }

    const HandleSelectCity = (id) =>{
        setCitySelected(id)
    }

    const HandleSubmit = (event)=>{
        event.preventDefault()

        //validations
        setTitleAlert(title==='')
        setCategorySelectedAlert(!categorySelected)
        setCitySelectedAlert(!citySelected)
        setAddressAlert(address==='')
        setTitleDescriptionAlert(titleDescription==='')
        setDescriptionAlert(description==='')
        setSelectedAmenitiesAlert(selectedAmenities.length===0)
        setRulesAlert(rules==='')
        setSecurityAlert(security==='')
        setCancelationAlert(cancelation==='')
        setImageListAlert(imageList.length<5)

        if(title!=='' && 
            categorySelected && 
            citySelected && 
            address!=='' &&
            titleDescription!=='' && 
            description!=='' &&
            selectedAmenities.length!==0 &&
            rules!=='' &&
            security!=='' &&
            cancelation!=='' &&
            imageList.length>4
            ){  
                
            
                //Info for the fetch
                const data = {
                    titulo: title,
                    tituloDescripcion: titleDescription,
                    descripcion: description,
                    disponibilidad: null,
                    ubicacion: address,
                    idCaracteristicas: selectedAmenities,
                    politica: {
                        normas: rules,
                        seguridad: security,
                        cancelacion: cancelation
                    },
                    idCiudad: citySelected,
                    idProvincia: null,
                    idCategoria: categorySelected,
                    imagenesURL: imageList,
                    precio: 4000,
                    idUsuario: userInfo.id
                    }
                        console.log(data)
                 
                fetch('http://52.14.221.16:8080/productos/administracion', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${userInfo.tokenJWT}`,
                            'Content-Type': 'application/json'
                            },
                        body: JSON.stringify(data)
                                })
                .then(response => {
                        if (response.status!=200){
                            throw new Error(response.error)
                        } 
                            return response.json()
                        })
                .then(data => {
                        console.log(data)
                        setShowProductCreated(true)
                        navigate(window.scrollTo(0, 0))
                        })
                .catch((error) => {
                        console.error('Error:', error);
                        setShowProductFailed(true)
                        navigate(window.scrollTo(0, 0))
                        });    
            }
    }

  return (
    <>
        <div className={styles.main_container}>
            <h2>Crear propiedad</h2>
            <div className={styles.form_container}>
                <form onSubmit={HandleSubmit}>
                    
                    <div className={styles.title}>
                        <Input label={"Nombre de la propiedad"} handleValue={setTitle} valueContent={title} placeHolderContent={"ej: Departamento en Palermo"} obligatory={titleAlert}/>
                        <InputSelect label={"Categoría"} handleSelected={HandleSelectCategory} infoList={categoryList.map((element) => {return {id : element.id, value : element.titulo}})} obligatory={categorySelectedAlert}/>
                    </div>

                    <div className={styles.location}>
                        <Input label={"Dirección"} handleValue={setAddress} valueContent={address} placeHolderContent={"Indicá la dirección exacta de tu propiedad"} obligatory={addressAlert}/>                       
                        <InputSelect label={"Ciudad"} handleSelected={HandleSelectCity} infoList={cityList.map((element) => {return {id : element.id, value : element.ciudad}})} obligatory={citySelectedAlert}/>
                    </div>
                        <Input label={"Titulo de la descripción"} handleValue={setTitleDescription} valueContent={titleDescription} placeHolderContent={"ej: Alojate en la mejor zona de Palermo"} obligatory={titleDescriptionAlert}/>                       
                        <InputTextArea label={"Descripción"} handleValue={setDescription} valueContent={description} placeHolderContent={"Descripción atractiva de la propiedad"} maxChar={2000} rows={4} obligatory={descriptionAlert}/>
                    
                    <div className={styles.amenity_options}>
                    <h3>Atributos</h3>
                    <span>Elegí los atributos que contenga tu propiedad. Recordá que podés elegir más de uno.</span>
                        <CheckboxList itemList={amenityList} selectedItems ={selectedAmenities} handleSelectedItems ={setSelectedAmenities} obligatory={selectedAmenitiesAlert}/>
                    </div>

                    <h3>Politicas del producto</h3>
                    <span>Te brindamos una serie de políticas como guía para que las edites y queden acorde a las de tu propiedad</span>
                    <div className={styles.policy_and_rules}>
                        <div className={styles.policy_container}>
                            <h6>Normas de la casa</h6>
                            <InputTextArea label={"Descripción"} handleValue={setRules} valueContent={rules} rows={10} maxChar={1500} obligatory={rulesAlert}/>
                        </div>   
                        <div className={styles.policy_container}>
                            <h6>Salud y seguridad</h6>
                            <InputTextArea label={"Descripción"} handleValue={setSecurity} valueContent={security} rows={10} maxChar={1500} obligatory={securityAlert}/>
                        </div> 
                        <div className={styles.policy_container}>
                            <h6>Políticas de cancelación</h6>
                            <InputTextArea label={"Descripción"} handleValue={setCancelation} valueContent={cancelation} rows={10} maxChar={1500} obligatory={cancelationAlert}/>
                        </div>                      
                    </div>
                    <div className={styles.images}>
                    <h3>Cargar imágenes</h3>
                    <span>Te recomendamos cargar imágenes horizontales para que sean mejor apreciadas. Recordá que la primer imágen cargada será la imagen de portada. Cargá mínimo 5 imágenes</span>
                    <ItemListAdd itemList={imageList} handleItemList={setImageList} inputPlaceHolder={"URL de la imagen"} obligatory={imageListAlert}/>                      
                    </div>    
                </form>
                <div className={styles.submit_buttons}>
                        <PrimaryButton onClickFunction={HandleSubmit} text={"Crear producto"}/>
                </div>
                {showProductCreated&&(<ModalMessage handleShowMessage={setShowProductCreated} modalInfo={succedMessage}/>)}
                {showProductFailed&&(<ModalMessage handleShowMessage={setShowProductFailed} modalInfo={failedMessage}/>)}
            </div>
        </div>
    </>
  )
}
