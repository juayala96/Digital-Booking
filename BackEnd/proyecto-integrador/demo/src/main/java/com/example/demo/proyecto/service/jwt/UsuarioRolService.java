package com.example.demo.proyecto.service.jwt;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.jwt.UsuarioRol;
import com.example.demo.proyecto.repository.jwt.UsuarioRolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioRolService {
    @Autowired
    private UsuarioRolRepository usuarioRolRepository;

    @Autowired
    public UsuarioRolService(UsuarioRolRepository usuarioRolRepository) {this.usuarioRolRepository = usuarioRolRepository;}

    public UsuarioRol guardar(UsuarioRol usuarioRol) {
        return usuarioRolRepository.save(usuarioRol);
    }

    public UsuarioRol buscar(Integer id) throws ResourceNotFoundException {
        Optional<UsuarioRol> usuarioRol = usuarioRolRepository.findById(id);
        if(usuarioRol.isEmpty()){
            throw new ResourceNotFoundException("No existe una usuarioRol" + " con el ID: " + id);
        }
        return usuarioRol.get();
    }


    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            usuarioRolRepository.deleteById(id);
            return "UsuarioRol eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<UsuarioRol> buscarTodos(){
        return usuarioRolRepository.findAll();
    }

    public UsuarioRol actualizar(UsuarioRol usuarioRol)throws ResourceNotFoundException{
        buscar(usuarioRol.getId());
        return usuarioRolRepository.save(usuarioRol);
    }
}
