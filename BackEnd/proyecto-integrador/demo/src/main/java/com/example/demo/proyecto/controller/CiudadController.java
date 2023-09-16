package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.CiudadDto;
import com.example.demo.proyecto.model.Ciudad;
import com.example.demo.proyecto.service.CiudadService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/ciudades")
@Tag(name = "Ciudad", description = "Contienen todas las operaciones que se pueden realizar a una ciudad.")
public class CiudadController {
    @Autowired
    private CiudadService ciudadService;

    @Operation(summary = "Obtiene ciudades registradas por id")
    @GetMapping("/{id}")
    public ResponseEntity<CiudadDto> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(ciudadService.buscar(id));
    }

    @Operation(summary = "Elimina una ciudad por id")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        ciudadService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la provincia con id: " + id);
    }

    @Operation(summary = "Trae las ciudades")
    @GetMapping
    public ResponseEntity<List<CiudadDto>> buscarTodos(){
        return ResponseEntity.ok(ciudadService.buscarTodos());
    }

    @Operation(summary = "Guarda una nueva ciudad")
    @PostMapping
    public ResponseEntity<CiudadDto> guardar(@RequestBody CiudadDto ciudad){
        return ResponseEntity.ok(ciudadService.guardar(ciudad));
    }

    @Operation(summary = "Modifica una ciudad")
    @PutMapping
    public ResponseEntity<CiudadDto> actualizar(@RequestBody CiudadDto ciudad) throws ResourceNotFoundException {
        return ResponseEntity.ok(ciudadService.actualizar(ciudad));
    }
}
