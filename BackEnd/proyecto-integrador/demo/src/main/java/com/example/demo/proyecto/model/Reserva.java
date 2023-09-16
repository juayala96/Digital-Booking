package com.example.demo.proyecto.model;

import com.example.demo.proyecto.model.jwt.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;

    private LocalDate fechaInicial;

    private LocalDate fechaFinal;

    private LocalTime HoraLLegada;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;


    public Reserva(LocalDate fechaInicial, LocalDate fechaFinal, LocalTime horaLLegada, Producto producto, Usuario usuario) {

        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.HoraLLegada = horaLLegada;
        this.producto = producto;
        this.usuario = usuario;
    }
}
