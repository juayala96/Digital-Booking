package com.example.demo.proyecto.dto;

import com.example.demo.proyecto.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ReservaByUsuarioDto {
    private Integer id;
    private LocalDate start;
    private LocalDate end;
    private Producto producto;
    private Integer idUsuario;
}
