import React from "react";
import Buscador from "./BodyComponents/Buscador/Buscador";
import ListaCategorias from "./BodyComponents/Categorias/ListaCategorias";
import { Route, Routes} from "react-router-dom";
import Results from "./BodyComponents/Resultados/Results";

export default function BodyHome() {

  localStorage.removeItem('idProduct')
  localStorage.removeItem('nameProduct')

  return (
    <>
      <Buscador/>
      <ListaCategorias/>
      <Routes>  
          <Route path="/" element={<Results/>}/>
          <Route path="/filter-by-category/id=:id/*" element={<Results/>}/>          
          <Route path="/filter-by-city/id=:id/*" element={<Results/>}/>
          <Route path="/filter-by-date/from=:startDate/to=:endDate" element={<Results/>}/>
          <Route path="/filter-by-city-and-date/id=:id/:cityName/from=:startDate/to=:endDate" element={<Results/>}/>
      </Routes>
    </>
  )
} 

