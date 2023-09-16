package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.CategoriaDto;
import com.example.demo.proyecto.model.Categoria;
import com.example.demo.proyecto.service.CategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/categorias")
@Tag(name = "Categoria", description = "Contienen todas las operaciones que se pueden realizar a una categoria.")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @Operation(summary = "Obtiene categorias registradas por id")
    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscar(@PathVariable Integer id) throws BadRequestException {
        return ResponseEntity.ok(categoriaService.buscar(id));
    }

    @Operation(summary = "Elimina una categoria por id")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        categoriaService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la categoría con id: " + id);
    }

    @Operation(summary = "Trae las categorías")
    @GetMapping
    public ResponseEntity<List<CategoriaDto>> buscarTodos(){
        return ResponseEntity.ok(categoriaService.buscarTodos());
    }

    @Operation(summary = "Guarda una nueva categoría")
    @PostMapping
    public ResponseEntity<CategoriaDto> guardar(@RequestBody CategoriaDto categoria){
        return ResponseEntity.ok(categoriaService.guardar(categoria));
    }

    @Operation(summary = "Modifica una categoría")
    @PutMapping
    public ResponseEntity<CategoriaDto> actualizar(@RequestBody CategoriaDto categoria) throws BadRequestException {
        return ResponseEntity.ok(categoriaService.actualizar(categoria));
    }
}

