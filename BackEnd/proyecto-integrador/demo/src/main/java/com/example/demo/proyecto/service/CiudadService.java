package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.CiudadDto;
import com.example.demo.proyecto.model.Ciudad;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.repository.CiudadRepository;
import com.example.demo.proyecto.repository.ProductoRepository;
import com.example.demo.proyecto.util.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CiudadService {
    @Autowired
    private CiudadRepository ciudadRepository;

    @Autowired
    private MapperUtil mapperUtil;

    public CiudadService(ProductoRepository ciudad) {this.ciudadRepository = ciudadRepository;}

    public CiudadDto guardar(CiudadDto ciudad) {
        return mapperUtil.map(ciudadRepository.save(mapperUtil.map(ciudad, Ciudad.class)), CiudadDto.class);
    }

    public CiudadDto buscar(Integer id) throws ResourceNotFoundException {
        Optional<Ciudad> ciudad = ciudadRepository.findById(id);
        if(ciudad.isEmpty()){
            throw new ResourceNotFoundException("No existe una ciudad con el ID: " + id);
        }
        return mapperUtil.map(ciudadRepository.findById(id), CiudadDto.class);
    }

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            ciudadRepository.deleteById(id);
            return "Ciudad eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<CiudadDto> buscarTodos(){
        return mapperUtil.mapAll(ciudadRepository.findAll(),CiudadDto.class);
    }

    public CiudadDto actualizar(CiudadDto ciudad)throws ResourceNotFoundException{
        buscar(ciudad.getId());
        return mapperUtil.map(ciudadRepository.save(mapperUtil.map(ciudad, Ciudad.class)), CiudadDto.class);
    }

}
