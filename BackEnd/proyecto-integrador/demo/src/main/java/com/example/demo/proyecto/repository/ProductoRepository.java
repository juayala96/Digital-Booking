package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Producto;


import com.example.demo.proyecto.model.Reserva;
import com.example.demo.proyecto.model.jwt.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.time.LocalDate;
import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto,Integer> {


    @Query("FROM Producto p WHERE p.categoria.id = ?1")
    List<Producto> findProductoByCategoriaParams(Integer categoriaId);

    @Query("FROM Producto p WHERE p.ciudad.id = ?1")
    List<Producto> findProductoByCiudadParams(Integer ciudadId);

    @Query("FROM Producto p WHERE p.provincia.id = ?1")
    List<Producto> findProductoByProvinciaParams(Integer provinciaId);

    @Query("FROM Producto p WHERE p.usuario.id = ?1")
    List<Producto> findProductoByUsuario(Integer usuarioId);

    @Query(value = "SELECT * FROM productos ORDER BY RAND() LIMIT 8 ",nativeQuery = true)
    List<Producto> randomProductsAndLimit();
    
    @Query(value = "select * from productos as p " +
            "where p.id not in(" +
            "select distinct id_producto from reservas as r " +
            "where (fecha_inicial between ?1 AND ?2) " +
            "OR (fecha_final between ?1 AND ?2) " +
            "OR ((?1 between fecha_inicial AND fecha_final) " +
            "OR (?2 between fecha_inicial AND fecha_final))); "
            , nativeQuery = true)
    List<Producto> buscarDisponibles(LocalDate endDate, LocalDate startDate);

}
