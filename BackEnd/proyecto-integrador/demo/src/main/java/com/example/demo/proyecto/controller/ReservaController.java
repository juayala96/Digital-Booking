package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.proyecto.dto.ReservaByUsuarioDto;
import com.example.demo.proyecto.dto.ReservaDto;
import com.example.demo.proyecto.dto.ReservaRequest;
import com.example.demo.proyecto.service.ReservaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins="*")
@Tag(name = "Reserva", description = "Contienen todas las operaciones que se pueden realizar a una reserva.")
@SecurityRequirement(name = "Bearer Authentication")
public class ReservaController {
    @Autowired
    private ReservaService reservaService;

    @Operation(summary = "Obtiene reservas registradas por id")
    @GetMapping("/{id}")
    public ResponseEntity<List<ReservaDto>> buscar(@PathVariable Integer id) {
        List<ReservaDto> reserves = reservaService.buscarPorProductoId(id);
        if(!reserves.isEmpty()){
            return ResponseEntity.ok(reserves);
        }else return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    @Operation(summary = "Guarda una nueva reserva")
    @PostMapping
    public ResponseEntity<ReservaDto> guardar(@RequestBody ReservaRequest reserva) throws Exception {
        try {
            return ResponseEntity.ok(reservaService.guardar(reserva));
        }catch (BadRequestException e){
            throw new BadRequestException(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @Operation(summary = "Obtiene reservas registradas por Usuario")
    @GetMapping("/byUsuario/{idUsuario}")
    public ResponseEntity<List<ReservaByUsuarioDto>> buscarPorUsuario(@PathVariable Integer idUsuario) throws BadRequestException {
        return ResponseEntity.ok( reservaService.buscarPorUsuarioId(idUsuario));
    }
}
