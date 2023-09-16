package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.CiudadDto;
import com.example.demo.proyecto.dto.PoliticaDto;
import com.example.demo.proyecto.dto.ProvinciaDto;
import com.example.demo.proyecto.model.Ciudad;
import com.example.demo.proyecto.model.Politica;
import com.example.demo.proyecto.model.Provincia;
import com.example.demo.proyecto.repository.ProvinciaRepository;

import com.example.demo.proyecto.util.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProvinciaService {
    @Autowired
    private ProvinciaRepository provinciaRepository;

    @Autowired
    private MapperUtil mapperUtil;

    public ProvinciaService(ProvinciaRepository provinciaRepository) {this.provinciaRepository = provinciaRepository;}

    public ProvinciaDto guardar(ProvinciaDto provincia) {
        return mapperUtil.map(provinciaRepository.save(mapperUtil.map(provincia, Provincia.class)), ProvinciaDto.class) ;
    }

    public ProvinciaDto buscar(Integer id) throws ResourceNotFoundException {
        Optional<Provincia> provincia = provinciaRepository.findById(id);
        if(provincia.isEmpty()){
            throw new ResourceNotFoundException("No existe una provincia con el ID: " + id);
        }
        return mapperUtil.map(provinciaRepository.findById(id), ProvinciaDto.class);
    }

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            provinciaRepository.deleteById(id);
            return "Provincia eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<ProvinciaDto> buscarTodos(){
        return mapperUtil.mapAll(provinciaRepository.findAll(), ProvinciaDto.class);
    }

    public ProvinciaDto actualizar(ProvinciaDto provincia)throws ResourceNotFoundException{
        buscar(provincia.getId());
        return mapperUtil.map(provinciaRepository.save(mapperUtil.map(provincia, Provincia.class)), ProvinciaDto.class);
    }

}
