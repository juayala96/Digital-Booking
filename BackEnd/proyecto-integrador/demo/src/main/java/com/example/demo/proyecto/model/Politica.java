
package com.example.demo.proyecto.model;


import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="politicas")
public class Politica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String normas;
    private String seguridad;
    private String cancelacion;


    public Politica(String normas, String seguridad, String cancelacion) {
        this.normas = normas;
        this.seguridad = seguridad;
        this.cancelacion = cancelacion;
    }

}
