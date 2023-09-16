import React from 'react'
import styles from './ItemList.module.css'
import add from '../../../assets/add.png'
import remove from '../../../assets/remove.png'
import { useState } from 'react';
import { useCallback } from 'react';

/**
 * Descripcion
 * 
 * @param readonly boolean to set the property ReadOnly in the input
 * @param inputPlaceHolder string: the place holder to display in the input
 * @param itemText string: an item in the itemList
 * @param itemIndex index to remove the item selected
 * @param handleAdd adds an item to the itemList
 * @param handleRemove removes an item from the itemList
 * 
 */

export default function ItemListInput({readonly, itemIndex, itemText, handleAdd, handleRemove, inputPlaceHolder}) {
  const [inputValue, setInputValue] = useState(itemText || '')

  const handleAddClick = useCallback(() =>{
      console.log("inputValue", inputValue)
      handleAdd(inputValue)
      setInputValue('')
  },[inputValue, handleAdd])

  const handleRemoveClick = useCallback (() =>{
      handleRemove(itemIndex)
  }, [itemIndex, handleRemove])

  return (
      <>
        <div className={styles.images_container}>
            <input type="text"
            onChange={(e) =>{setInputValue(e.target.value)}}
            // defaultValue={inputValue}
            value={inputValue}
            placeholder={inputPlaceHolder} 
            readOnly = {readonly}
            />
            {(
              !itemText ? 
              <img src={add} alt="add" onClick={handleAddClick}/> :
              <img src={remove} alt="remove" onClick={handleRemoveClick}/>
            )}
        </div>  
      </>
  )
}
