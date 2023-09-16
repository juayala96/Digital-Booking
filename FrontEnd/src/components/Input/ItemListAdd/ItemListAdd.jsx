import React from 'react'
import ItemListInput from "./ItemListInput"
import styles from './ItemList.module.css'

/**
 * Descripcion
 * @param inputPlaceHolder string: the place holder to display in the input
 * @param itemList an array of items added by the user
 * @param handleItemList updates the state of itemList by adding the user's input.
 * @param obligatory a boolean to display that the input is obligatory
 */

export default function ItemListAdd({itemList, handleItemList, inputPlaceHolder, obligatory}) {

const handleAdd = (itemListInput) =>{
  if(itemListInput === "") return;

  let updatedList = [...itemList, itemListInput]
  handleItemList(updatedList)
  console.log("urlList add updatedList:", updatedList)
}

const handleRemove = (removeIndex) =>{
  let list = [...itemList]
  console.log('removeIndex ', removeIndex)
  list.splice(removeIndex, 1)
  console.log("itemList remove itemList | list", itemList, list)
  handleItemList(list)
}

  return (
      <>
        {itemList.map((item, i)=>
        <ItemListInput key={item} readonly itemIndex={i} itemText={item} handleRemove={handleRemove} />
        )}
          
        <ItemListInput inputPlaceHolder={inputPlaceHolder} handleAdd={handleAdd}/>
        {obligatory&&(
        <div className={styles.alert}>
            <span >Necesitas cargar mínimo 5 fotos </span>
        </div>
        )}
      </>
  )
}
