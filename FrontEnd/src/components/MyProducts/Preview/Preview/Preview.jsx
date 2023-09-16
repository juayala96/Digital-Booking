import React from 'react'
import BloqueHeader from '../../../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader'
import ProductInformation from '../../../ProductsPage/ProductInformation'

export default function Preview({product, images}) {
  
  if(!product){
    return
  }
  return (
    <>
        <BloqueHeader info={product} preview/>
        <ProductInformation  images={images} product={product}/>
    </>
  )
}
