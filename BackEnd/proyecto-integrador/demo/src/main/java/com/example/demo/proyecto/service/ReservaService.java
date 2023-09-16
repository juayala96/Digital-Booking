package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.proyecto.dto.ReservaByUsuarioDto;
import com.example.demo.proyecto.dto.ReservaDto;
import com.example.demo.proyecto.dto.ReservaRequest;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.model.Reserva;
import com.example.demo.proyecto.model.jwt.Usuario;
import com.example.demo.proyecto.repository.ProductoRepository;
import com.example.demo.proyecto.repository.ReservaRepository;
import com.example.demo.proyecto.repository.jwt.UsuarioRepository;
import com.example.demo.proyecto.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {
    @Autowired
    private ReservaRepository reservaRepository;
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    Producto producto;
    Usuario usuario;
    Reserva reservaEntity;

    public ReservaService(ReservaRepository reservaRepository, ProductoRepository productoRepository, UsuarioRepository usuarioRepository) {
        this.reservaRepository = reservaRepository;
        this.productoRepository = productoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    /***
     * Guarda la reserva, comprobando primero que
     * el producto exista, el usuario exista y
     * las fechas estén disponibles
     * @param reserva
     * @return ReservaDto
     * @throws BadRequestException
     */
    public ReservaDto guardar(ReservaRequest reserva) throws Exception {
        Optional<Producto> prod = productoRepository.findById(reserva.getIdProducto());
        if(prod.isEmpty())
            throw new BadRequestException("No existe un producto con el ID: " + reserva.getIdProducto());

        Optional<Usuario> usu = usuarioRepository.findById(reserva.getIdUsuario());
        if(usu.isEmpty())
            throw new BadRequestException("No existe un usuario con el ID: " + reserva.getIdUsuario());

        if (reservaDisponible(reserva, prod.get().getId())){
            producto = prod.get();
            usuario = usu.get();
            reservaEntity = Mapper.MapReserva(reserva, producto, usuario);
            Reserva response = new Reserva();
            response = reservaRepository.save(reservaEntity);
            JavaMailService.enviarMail(usuario.getEmail(),"Reserva exitosa", JavaMailService.getBodyReserva(response, producto));
            return Mapper.MapReserva(response);

        } else {
            throw new BadRequestException("No hay reserva disponible para esos dias");
        }
    }

    /***
     * Devuelve todas las reservas para
     * un producto determinado
     * @param id
     * @return List<ReservaDto>
     */
    public List<ReservaDto> buscarPorProductoId(Integer id) {
        List<ReservaDto> reservaDtos = new ArrayList<>();
        List<Reserva> reservas = reservaRepository.findReservasByProductParams(id);
        reservas.forEach(r -> reservaDtos.add(Mapper.MapReserva(r)));
        return reservaDtos;
    }

    /***
     * Comprueba si las fechas de la reservaRequest
     * están disponibles para el producto Id enviado
     * @param reserva
     * @param prodId
     * @return boolean
     */
    public boolean reservaDisponible(ReservaRequest reserva, Integer prodId){
        List<Reserva> turnosAgendados = reservaRepository.findAllByFechaInicialLessThanEqualAndFechaFinalGreaterThanEqual(reserva.getFechaFinal(),reserva.getFechaInicial());
        turnosAgendados.removeIf( t -> t.getProducto().getId() != prodId);

        return turnosAgendados.isEmpty();
    }

    public List<ReservaByUsuarioDto> buscarPorUsuarioId(Integer idUsuario) throws BadRequestException {
        Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
        if(usuario.isEmpty()){
            throw new BadRequestException("No existe usuario con id " + idUsuario);
        }
        List<Reserva> reservas = reservaRepository.findByUsuario(usuario.get());
        List<ReservaByUsuarioDto> reservaDtoList = new ArrayList<>();
        reservas.forEach(r->{
            reservaDtoList.add(Mapper.MapReservaByUsuario(r));
        });
        return reservaDtoList;
    }
}
