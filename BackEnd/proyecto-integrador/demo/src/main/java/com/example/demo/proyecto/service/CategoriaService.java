package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.CategoriaDto;
import com.example.demo.proyecto.model.Categoria;
import com.example.demo.proyecto.repository.CategoriaRepository;

import com.example.demo.proyecto.repository.ProductoRepository;
import com.example.demo.proyecto.util.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.List;
import java.util.Optional;


@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;
    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private MapperUtil mapperUtil;

    public CategoriaService(CategoriaRepository categoriaRepository, ProductoRepository productoRepository) {
        this.categoriaRepository = categoriaRepository;
        this.productoRepository = productoRepository;
    }

    public CategoriaDto guardar(CategoriaDto categoria) {
        return mapperUtil.map(categoriaRepository.save(mapperUtil.map(categoria, Categoria.class)),CategoriaDto.class);
    }

    public Categoria buscar(Integer id) throws BadRequestException {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        if(categoria.isEmpty()){
           throw new BadRequestException("No existe una categoria con el ID: " + id);
        }
        Categoria categoriaDB = categoria.get();
        categoriaDB.setTotalProductos(productoRepository.findProductoByCategoriaParams(id).size());
        categoriaDB.setDescripcion(String.valueOf(categoriaDB.getTotalProductos() + " " + categoriaDB.getTitulo().toLowerCase()));

        return categoriaDB;
    }

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            categoriaRepository.deleteById(id);
            return "Categoria eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<CategoriaDto> buscarTodos(){
        List<Categoria> categorias = categoriaRepository.findAll();
        categorias.forEach(c -> {
            c.setTotalProductos(productoRepository.findProductoByCategoriaParams(c.getId()).size());
            c.setDescripcion(c.getTotalProductos() + " " + c.getTitulo());
        });
        return mapperUtil.mapAll(categorias, CategoriaDto.class);
    }

    public CategoriaDto actualizar(CategoriaDto categoria) throws BadRequestException {
        buscar(categoria.getId());
        return mapperUtil.map(categoriaRepository.save(mapperUtil.map(categoria, Categoria.class)),CategoriaDto.class);
    }

}


