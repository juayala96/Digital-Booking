package com.example.demo.proyecto.dto;

import lombok.*;

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class CategoriaDto {
        private Integer id;
        private String titulo;
        private String descripcion;
        private String imagenURL;
        private transient int totalProductos;
    }
