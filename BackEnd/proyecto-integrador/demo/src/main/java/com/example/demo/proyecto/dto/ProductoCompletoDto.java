package com.example.demo.proyecto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class ProductoCompletoDto {
    private Integer id;
    private String titulo;
    private String tituloDescripcion;
    @Column(length=2000)
    private String descripcion;
    private String disponibilidad;
    private String imagenPrincipalURL;
    private String ubicacion;
    private double precio;
}
