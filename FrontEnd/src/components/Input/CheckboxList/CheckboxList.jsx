import React from "react";
import Checkbox from "./Checkbox"
import styles from './CheckboxList.module.css'

/**
 * Descripcion
 * 
 * @param handleSelectedItems updates the state the array "selectedItems"
 * @param selectedItems an array of ids of those items that were selected.
 * @param itemList an array of objects that contains the information of the items to display
 * structure: [{
    id:number,
    iconoURL: string (path to the icon to display next to the checkbox. can be empty to avoid displaying an icon),
    caracteristica:string (title or description of the item)
}]
 */

export default function CheckboxList ({itemList, selectedItems , handleSelectedItems, obligatory}) {

const handleSelect = (selected, itemID) =>{
    let items = [...selectedItems];

    if(selected){
        items.push(itemID)
    }
    else{
        let index = items.indexOf(itemID);
        if(index === -1) return;
        items.splice(index, 1);
    }
    
    handleSelectedItems(items);
}

return(
    <>
        <>
            {itemList.map((item) => <Checkbox item={item} key={item.id} handleSelectItem ={handleSelect}/>)}
        </>
        {obligatory&&(<div className={styles.alert}>
            <span >Tu hospedaje debe incluir al menos uno de estos atributos</span>
        </div>)}
    </>
)
}