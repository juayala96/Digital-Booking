package com.example.demo.proyecto.dto;

import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ProductoDto {
    Producto producto;
    List<ImagenDto> imagenes;
    List<ReservaDto> reservas;
}
