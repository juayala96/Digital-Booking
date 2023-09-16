package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.jwt.Usuario;
import com.example.demo.proyecto.service.jwt.UsuarioService;
import com.example.demo.proyecto.util.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins="*")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PasswordEncoder passwordEncoder;

//
    @PostMapping
    public ResponseEntity<Usuario> guardar(@RequestBody Usuario usuario) throws BadRequestException {
        try {
            if(!EmailValidator.validarEmail(usuario.getEmail()))
                throw new BadRequestException("La email ingresado no es valido");
            if(usuario.getPassword().length() < 6)
                throw new BadRequestException("La contraseña debe tener al menos 6 caracteres");
            String passWEncrypt = passwordEncoder.encode(usuario.getPassword());
            usuario.setPassword(passWEncrypt);
            Usuario usuarioDB = usuarioService.guardar(usuario);
            return new ResponseEntity<Usuario>(
                    usuarioDB,
                    HttpStatus.CREATED);
        }catch (BadRequestException e){
            throw new BadRequestException(e.getMessage());
        }
    }

    @PutMapping
    public ResponseEntity<Usuario> actualizar(@RequestBody Usuario usuario) throws ResourceNotFoundException {
        return ResponseEntity.ok(usuarioService.actualizar(usuario));
    }

}
