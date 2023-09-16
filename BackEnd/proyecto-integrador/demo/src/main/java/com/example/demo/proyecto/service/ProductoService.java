package com.example.demo.proyecto.service;


import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.*;
import com.example.demo.proyecto.model.*;
import com.example.demo.proyecto.model.jwt.Usuario;
import com.example.demo.proyecto.repository.*;
import com.example.demo.proyecto.repository.jwt.UsuarioRepository;
import com.example.demo.proyecto.util.Mapper;
import com.example.demo.proyecto.util.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;


import java.awt.*;
import java.time.LocalDate;
import java.util.*;
import java.util.List;

@Service
public class ProductoService  {

    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private ImagenRepository imagenRepository;
    @Autowired
    private ReservaRepository reservaRepository;
    @Autowired
    private PoliticaRepository politicaRepository;
    @Autowired
    private CaracteristicaRepository caracteristicaRepository;
    @Autowired
    private CiudadRepository ciudadRepository;
    @Autowired
    private ProvinciaRepository provinciaRepository;
    @Autowired
    private CategoriaRepository categoriaRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private MapperUtil mapperUtil;

    public ProductoService(ProductoRepository productoRepository, ImagenRepository imagenRepository, ReservaRepository reservaRepository, PoliticaRepository politicaRepository, CaracteristicaRepository caracteristicaRepository, CiudadRepository ciudadRepository, ProvinciaRepository provinciaRepository, CategoriaRepository categoriaRepository) {
        this.productoRepository = productoRepository;
        this.imagenRepository = imagenRepository;
        this.reservaRepository = reservaRepository;
        this.politicaRepository = politicaRepository;
        this.caracteristicaRepository = caracteristicaRepository;
        this.ciudadRepository = ciudadRepository;
        this.provinciaRepository = provinciaRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public Producto guardar(ProductoRequest producto) throws BadRequestException {
        List<Caracteristica> caracteristicasDB = caracteristicaRepository.findAll();
        Set<Caracteristica> caracteristicas = new HashSet<>();
        caracteristicasDB.forEach(c->{
            if(producto.getIdCaracteristicas().contains(c.getId())){
                caracteristicas.add(c);
            }
        });
        Optional<Ciudad> ciudad = ciudadRepository.findById(producto.getIdCiudad());
        if(ciudad.isEmpty())
            throw new BadRequestException("No existe ciudad con id " + producto.getIdCiudad());

        Provincia provinciaEntity = new Provincia();
        if(producto.getIdProvincia()!=null) {
            Optional<Provincia> provincia = provinciaRepository.findById(producto.getIdProvincia());
            if (provincia.isEmpty())
                throw new BadRequestException("No existe provincia con id " + producto.getIdProvincia());
            provinciaEntity = provincia.get();
        }

        Optional<Categoria> categoria = categoriaRepository.findById(producto.getIdCategoria());
        if(categoria.isEmpty())
            throw new BadRequestException("No existe categoria con id " + producto.getIdCategoria());

        Optional<Usuario> usuario = usuarioRepository.findById(producto.getIdUsuario());
        if(usuario.isEmpty())
            throw new BadRequestException("No existe usuario con id " + producto.getIdUsuario());

        Politica politica = new Politica();
        if(producto.getPolitica().getCancelacion()!=null || producto.getPolitica().getNormas()!=null || producto.getPolitica().getSeguridad()!=null)
            politica = politicaRepository.save(producto.getPolitica());

        Producto productoDB = productoRepository.save(Mapper.MapProducto(producto, caracteristicas, politica, ciudad.get(), provinciaEntity, categoria.get(), usuario.get()));

        producto.getImagenesURL().forEach( i ->
                imagenRepository.save(new Imagen(null,i,productoDB))
        );

        return productoDB;
    }

    public ProductoDto buscar(Integer id) throws ResourceNotFoundException {
        ProductoDto response = new ProductoDto();
        Optional<Producto> producto = productoRepository.findById(id);
        if(producto.isEmpty()){
            throw new ResourceNotFoundException("No existe un producto con el ID: " + id);
        }
        response.setProducto(producto.get());

        List<Imagen> imagenes = imagenRepository.findImagenesByProductParams(producto.get().getId());
        List<ImagenDto> imagenDtos = new ArrayList<>();
        imagenes.forEach(i -> imagenDtos.add(Mapper.MapImagen(i)));
        response.setImagenes(imagenDtos);

        List<ReservaDto> reservaDtos = new ArrayList<ReservaDto>();
        List<Reserva> reservas = reservaRepository.findReservasByProductParams(id);
        reservas.forEach(r -> reservaDtos.add(Mapper.MapReserva(r)));
        response.setReservas(reservaDtos);

        return response;
    }


    public List<Producto> productoByCategoria(Integer idCategoria){
        try {
            return productoRepository.findProductoByCategoriaParams(idCategoria);
        } catch(Exception ex){
            return null;
        }
    }


    public List<Producto> eightRandomProducts(){
        try {
            return productoRepository.randomProductsAndLimit();
        } catch(Exception ex){
            return null;
        }
    }

    public List<ProductoCompletoDto> buscarTodos(){
        return mapperUtil.mapAll(productoRepository.findAll(), ProductoCompletoDto.class);
    }

    public List<Producto> productoByCiudad(Integer idCiudad){
        try {
            return productoRepository.findProductoByCiudadParams(idCiudad);
        } catch(Exception ex){
            return null;
        }
    }

    public List<Producto> productoByProvincia(Integer idProvincia){
        try {
            return productoRepository.findProductoByProvinciaParams(idProvincia);
        } catch(Exception ex){
            return null;
        }
    }
    public List<Producto> productoByUsuario(Integer idUsuario){
        try {
            return productoRepository.findProductoByUsuario(idUsuario);
        } catch(Exception ex){
            return null;
        }
    }

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            productoRepository.deleteById(id);
            return "Producto eliminado";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }


    public ProductoCompletoDto actualizar(ProductoCompletoDto producto)throws ResourceNotFoundException{
        buscar(producto.getId());
        return mapperUtil.map(productoRepository.save(mapperUtil.map(producto, Producto.class)), ProductoCompletoDto.class);
    }

    public List<Producto> productosDisponibles(Integer idCiudad, LocalDate fechaInicial, LocalDate fechaFinal) throws BadRequestException {
        if (fechaInicial == null && fechaFinal != null || fechaInicial != null && fechaFinal == null)
            throw new BadRequestException("Fechas inválidas");
        //Sin filtros
        if (idCiudad == null && fechaInicial == null && fechaFinal == null)
            return eightRandomProducts();

        List<Producto> productos = new ArrayList<>();
        //Filtro por fechas
        if (fechaInicial != null && fechaFinal != null) {
            productos = productoRepository.buscarDisponibles(fechaInicial, fechaFinal);
            //Filtro por fechas y ciudad
            if (idCiudad != null)
                productos.removeIf(p -> p.getCiudad().getId() != idCiudad);
        } else{
            //Filtro por ciudad
            if (idCiudad != null)
                productos = productoByCiudad(idCiudad);
        }

        return productos;
    }
}
