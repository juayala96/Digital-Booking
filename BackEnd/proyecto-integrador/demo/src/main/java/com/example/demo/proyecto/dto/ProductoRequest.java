package com.example.demo.proyecto.dto;

import com.example.demo.proyecto.model.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class ProductoRequest {

    private String titulo;
    private String tituloDescripcion;
    private String descripcion;
    private String disponibilidad;
    private String ubicacion;
    private Set<Integer> idCaracteristicas;
    private Politica politica;
    private Integer idCiudad;
    private Integer idProvincia;
    private Integer idCategoria;
    private List<String> imagenesURL;
    private double precio;
    private Integer idUsuario;
}
