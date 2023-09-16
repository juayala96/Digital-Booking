package com.example.demo.proyecto.service.jwt;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.jwt.MainUserAuth;
import com.example.demo.proyecto.model.jwt.Usuario;
import com.example.demo.proyecto.repository.jwt.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UsuarioService implements UserDetailsService{

    private UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuarioBuscado = usuarioRepository.findByEmail(email);
            return MainUserAuth.build(usuarioBuscado);
    }

    public Usuario guardar(Usuario usuario) throws BadRequestException {
        Usuario usu = usuarioRepository.findByEmail(usuario.getEmail());
        if(usu == null)
            return usuarioRepository.save(usuario);
        else
            throw new BadRequestException("El email ya se encuentra registrado");
    }

    public Usuario buscar(Integer id) throws ResourceNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if(usuario.isEmpty()){
            throw new ResourceNotFoundException("No existe un usuario con el ID: " + id);
        }
        return usuario.get();
    }

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            usuarioRepository.deleteById(id);
            return "Usuario eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<Usuario> buscarTodos(){
        return usuarioRepository.findAll();
    }

    public Usuario actualizar(Usuario usuario)throws ResourceNotFoundException{
        Usuario usuarioDB = buscar(usuario.getId());
        usuarioDB.setCiudad(usuario.getCiudad());
        return usuarioRepository.save(usuarioDB);
    }

}
