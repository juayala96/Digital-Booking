import React, {useState} from "react";
import './Checkbox.css'

/**
 * Descripcion
 * 
 * @param handleSelectItem saves the id of the item selected and pushes it into an array of ids 
 * @param item an object from the array "itemList".
 * structure: {
    id:number,
    iconoURL: string (path to the icon to display next to the checkbox. can be empty to avoid displaying an icon),
    caracteristica:string (title or description of the item)
}
 */

export default function Checkbox ({item, handleSelectItem}) {
const [isChecked, setIsChecked] = useState(false)

return(
    <>
        <label key={item.id} className="checkbox_content">
            <input type="checkbox" onChange={()=>{
                let checked = !isChecked;
                setIsChecked(checked);

                handleSelectItem(checked, item.id);
                
            }}/>
            <svg className={`checkbox ${(isChecked ? "checkbox--active" : "")}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none">
                <path d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={isChecked ? "#FFF" : "none"}
                />
            </svg>
            <img src={item.iconoURL}/>
            {item.caracteristica}
        </label>
    </>
)
}