import React from "react";
import styles from "./cardCategories.module.css"
import { useNavigate } from "react-router-dom";

const CardCategories = ({categoria}) => {
  const navigate = useNavigate();
    const handleFiltrar = (event) => {
    navigate(`/filter-by-category/id=${categoria.id}/${categoria.titulo.replace(/ /g,'-')}`)    
  }
    return (
          <div className={styles.card} onClick={handleFiltrar}>
              <div>
                <img className={styles.image} src={categoria.imagenURL} alt="imagen del hospedaje"/>
              </div>
              <div>
                <h3 className={styles.title}>{categoria.titulo}</h3>
                <p className={styles.description}>{categoria.descripcion}</p>
              </div>
          </div>
    )}

  export default CardCategories;