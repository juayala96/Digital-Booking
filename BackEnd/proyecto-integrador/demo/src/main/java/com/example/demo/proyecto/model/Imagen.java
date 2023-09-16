package com.example.demo.proyecto.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "imagenes")
public class Imagen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String URL;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_producto",nullable = false)
    private Producto producto;

    public Imagen(String titulo, String URL, Producto producto) {
        this.titulo = titulo;
        this.URL = URL;
        this.producto = producto;
    }


}
