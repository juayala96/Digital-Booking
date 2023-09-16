import React, {useState, useMemo, useCallback} from "react";
import BloqueLocation from "./ProductComponents/BloqueLocation/BloqueLocation"
import Gallery from "../Gallery/Gallery";
import Description from "./ProductComponents/Description/Description";
import ProductDetail from "./ProductComponents/ProductDetails/ProductDetail";
import PolicyAndRules from "./ProductComponents/Policy/PolicyAndRules";
import Reservation from "./ProductComponents/Reservation/Reservation";
import ProductImageGallery from "./ProductComponents/DesktopGallery/ProductImageGallery"
import useScreenSize from "../../hooks/useScreenSize";

export default function ProductInformation ({daysBooked, handleLogOut, handleCheckIn, handleCheckOut, product, images}) {
    
    const [showGallery, setShowGallery] = useState()
    const { width } = useScreenSize();
    const imagesArray = useMemo(()=>{
        if(images){
            return images.map((image)=>image.url)
        }
    },[images])

    const handleShowGallery = useCallback(
      () => {
        setShowGallery(!showGallery)
        images={imagesArray}
      },
      [showGallery]
    )
      console.log("POLICY", product.politica)
    return (
        <>
            <BloqueLocation product={product}/>
            {
                width<1023 || showGallery ? 
                <Gallery images={imagesArray} showGallery={showGallery} onClick={handleShowGallery} />:
                <ProductImageGallery onClick={handleShowGallery} images={imagesArray} />
            }
            { !showGallery&&(<>
                <Description product={product}/>
                <ProductDetail productAmenity={product.caracteristicasDelProducto}/>
                <PolicyAndRules info={product.politica}/>
                <Reservation daysBooked={daysBooked} handleCheckIn = {handleCheckIn} handleCheckOut = {handleCheckOut} product={product} handleLogOut={handleLogOut}/>
            </>)}
            
        </>
    )}