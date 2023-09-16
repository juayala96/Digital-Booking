import React from "react";
import styles from './productDetail.module.css';

export default function ProductDetail ({productAmenity}) {
  
const RenderAmenities = () => {
        let result = [];

        for (let i = 0; i < productAmenity.length; i++) {
            const product = productAmenity[i];

            result.push(
                (
                    (<div className={styles.amenity} key={product.id}>
                        <img src={product.iconoURL} alt={product.caracteristica} />
                        <p>{product.caracteristica}</p>
                    </div>)
                )
            ); 
        }
       
        return result;
    }

    return (
        <div className={styles.detail_container}>
            <h2>Qué ofrece este lugar?</h2>
            <hr />
            <div className={styles.amenities_container}>
                {RenderAmenities()}
            </div>
        </div>
    )

    }