package com.example.demo.proyecto.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.CiudadDto;
import com.example.demo.proyecto.dto.PoliticaDto;
import com.example.demo.proyecto.service.CiudadService;
import com.example.demo.proyecto.service.PoliticaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/politicas")
@Tag(name = "Politica", description = "Contienen todas las operaciones que se pueden realizar a una politica.")
public class PoliticaController {
    @Autowired
    private PoliticaService politicaService;

    @Operation(summary = "Obtiene una politica registrada por id")
    @GetMapping("/{id}")
    public ResponseEntity<PoliticaDto> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(politicaService.buscar(id));
    }



}
