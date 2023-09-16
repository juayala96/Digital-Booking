package com.example.demo.proyecto.controller;


import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.ProductoCompletoDto;
import com.example.demo.proyecto.dto.ProductoDto;
import com.example.demo.proyecto.dto.ProductoRequest;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/productos")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping("/byCategoria/{id}")
    public ResponseEntity<List<Producto>> buscarPorCategoría(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByCategoria(id));
    }

    @GetMapping("/byProvincia/{id}")
    public ResponseEntity<List<Producto>> buscarPorProvincia(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByProvincia(id));
    }

    @GetMapping("/byUsuario/{id}")
    public ResponseEntity<List<Producto>> buscarPorUsuario(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByUsuario(id));
    }

    @GetMapping("/byCiudad/{id}")
    public ResponseEntity<List<Producto>> buscarPorCiudad(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByCiudad(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDto> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.buscar(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        productoService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó el producto con id: " + id);
    }

//user
    @GetMapping("/inicio")
    public ResponseEntity<List<Producto>> randomProducts(){
        return ResponseEntity.ok(productoService.eightRandomProducts());
    }

//public
    @GetMapping
    public ResponseEntity<List<ProductoCompletoDto>> buscarTodos(){
        return ResponseEntity.ok(productoService.buscarTodos());
    }

    //admin
    @PostMapping("/administracion")
    public ResponseEntity<Producto> guardar(@RequestBody ProductoRequest producto) throws BadRequestException {
        return ResponseEntity.ok(productoService.guardar(producto));
    }

    @PutMapping("/administracion")
    public ResponseEntity<ProductoCompletoDto> actualizar(@RequestBody ProductoCompletoDto producto) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.actualizar(producto));
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Producto>> buscarPorFiltros(@RequestParam(required = false) Integer idCiudad, @RequestParam(required = false) String fechaInicial, @RequestParam(required = false) String fechaFinal) throws BadRequestException {
        LocalDate fInicial = fechaInicial == null ? null : LocalDate.parse(fechaInicial);
        LocalDate fFinal = fechaFinal == null ? null : LocalDate.parse(fechaFinal);
        List<Producto> productos = productoService.productosDisponibles(idCiudad,fInicial, fFinal);
        return ResponseEntity.ok(productos);
    }

}
