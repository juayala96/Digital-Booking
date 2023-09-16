package com.example.demo.proyecto.model;

import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "caracteristicas")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String caracteristica;
    private String iconoURL;

    public Caracteristica(String caracteristica, String iconoURL) {
        this.caracteristica = caracteristica;
        this.iconoURL = iconoURL;
    }

}
