package com.example.demo.proyecto.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PoliticaDto {
    private Integer id;
    private String normas;
    private String seguridad;
    private String cancelacion;
}
