package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.ProvinciaDto;
import com.example.demo.proyecto.model.Provincia;
import com.example.demo.proyecto.service.ProvinciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/provincias")
@CrossOrigin(origins="*")
public class ProvinciaController {
    @Autowired
    private ProvinciaService provinciaService;

    @GetMapping("/{id}")
    public ResponseEntity<ProvinciaDto> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(provinciaService.buscar(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        provinciaService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la provincia con id: " + id);
    }

    @GetMapping
    public ResponseEntity<List<ProvinciaDto>> buscarTodos(){
        return ResponseEntity.ok(provinciaService.buscarTodos());
    }

    @PostMapping
    public ResponseEntity<ProvinciaDto> guardar(@RequestBody ProvinciaDto provincia){
        return ResponseEntity.ok(provinciaService.guardar(provincia));
    }
    
    @PutMapping
    public ResponseEntity<ProvinciaDto> actualizar(@RequestBody ProvinciaDto provincia) throws ResourceNotFoundException {
        return ResponseEntity.ok(provinciaService.actualizar(provincia));
    }

}
