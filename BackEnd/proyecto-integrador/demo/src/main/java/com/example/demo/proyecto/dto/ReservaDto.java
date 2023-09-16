package com.example.demo.proyecto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ReservaDto {
    private Integer id;
    private LocalDate start;
    private LocalDate end;
    private Integer idProducto;
    private Integer idUsuario;

}

