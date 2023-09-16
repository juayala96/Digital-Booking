package com.example.demo.proyecto.controller;

import com.example.demo.proyecto.dto.CaracteristicaDto;
import com.example.demo.proyecto.dto.CategoriaDto;
import com.example.demo.proyecto.service.CaracteristicaService;
import com.example.demo.proyecto.service.CategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/caracteristicas")
@Tag(name = "Caracteristica", description = "Contienen todas las operaciones que se pueden realizar a una caracteristica.")
public class CaracteristicaController {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @Operation(summary = "Trae las caracteristicas")
    @GetMapping
    public ResponseEntity<List<CaracteristicaDto>> buscarTodos(){
        return ResponseEntity.ok(caracteristicaService.buscarTodos());
    }
}
