package com.example.demo.proyecto.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CaracteristicaDto {
    private Integer id;
    private String caracteristica;
    private String iconoURL;
}
