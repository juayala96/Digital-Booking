package com.example.demo.proyecto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ReservaRequest {
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    private String horaLlegada;
    @NotNull(message = "debe asociar un producto valido")
    private Integer idProducto;
    @NotNull(message = "debe asociar un usuario valido")
    private Integer idUsuario;

}
