package com.example.demo.proyecto.controller;


import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.ImagenDto;
import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.service.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/imagenes")
public class ImagenController {
    @Autowired
    private ImagenService imagenService;


    @GetMapping("/{id}")
    public ResponseEntity<ImagenDto> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(imagenService.buscar(id));
    }


    @GetMapping("/byProducto/{id}")
    public ResponseEntity<List<ImagenDto>> findImagenesByProduct(@PathVariable Integer id){
        return ResponseEntity.ok(imagenService.imagenesByProducto(id));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        imagenService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la imagen con id: " + id);
    }


    @GetMapping
    public ResponseEntity<List<ImagenDto>> buscarTodos(){
        return ResponseEntity.ok(imagenService.buscarTodos());
    }


    @PostMapping
    public ResponseEntity<Imagen> guardar(@RequestBody Imagen imagen){
        return ResponseEntity.ok(imagenService.guardar(imagen));
    }


    @PutMapping
    public ResponseEntity<Imagen> actualizar(@RequestBody Imagen imagen) throws ResourceNotFoundException {
        return ResponseEntity.ok(imagenService.actualizar(imagen));
    }

}
