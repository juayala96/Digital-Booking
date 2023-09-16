package com.example.demo.proyecto.model.jwt;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private String ciudad;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_role")
    private UsuarioRol usuarioRol;

}
