package com.example.demo.proyecto.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.CiudadDto;
import com.example.demo.proyecto.dto.PoliticaDto;
import com.example.demo.proyecto.model.Ciudad;
import com.example.demo.proyecto.model.Politica;
import com.example.demo.proyecto.model.Provincia;
import com.example.demo.proyecto.repository.PoliticaRepository;
import com.example.demo.proyecto.util.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PoliticaService {

    @Autowired
    private PoliticaRepository politicaRepository;

    @Autowired
    private MapperUtil mapperUtil;

    public PoliticaService(PoliticaRepository politicaRepository){this.politicaRepository = politicaRepository;}

    public PoliticaDto guardar(PoliticaDto politica) {
        return mapperUtil.map(politicaRepository.save(mapperUtil.map(politica, Politica.class)), PoliticaDto.class);
    }

    public PoliticaDto buscar(Integer id) throws ResourceNotFoundException {
        Optional<Politica> politica = politicaRepository.findById(id);
        if(politica.isEmpty()){
            throw new ResourceNotFoundException("No existe un turn con el ID: " + id);
        }
        return mapperUtil.map(politicaRepository.findById(id), PoliticaDto.class);
    }

    public PoliticaDto actualizar(PoliticaDto politica)throws ResourceNotFoundException {
        buscar(politica.getId());
        return mapperUtil.map(politicaRepository.save(mapperUtil.map(politica, Politica.class)), PoliticaDto.class);
    }

}
