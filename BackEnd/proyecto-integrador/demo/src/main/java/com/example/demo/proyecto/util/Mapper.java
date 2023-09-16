package com.example.demo.proyecto.util;

import com.example.demo.proyecto.dto.*;
import com.example.demo.proyecto.model.*;
import com.example.demo.proyecto.model.jwt.Usuario;

import java.time.LocalTime;
import java.util.Set;

public class Mapper {

    public static ReservaDto MapReserva(Reserva reserva){
        ReservaDto dto = new ReservaDto();
        dto.setId(reserva.getId());
        dto.setStart(reserva.getFechaInicial());
        dto.setEnd(reserva.getFechaFinal());
        dto.setIdProducto(reserva.getProducto().getId());
        dto.setIdUsuario(reserva.getUsuario().getId());

        return  dto;
    }

    public static Reserva MapReserva(ReservaRequest r, Producto producto, Usuario usuario){
        Reserva reserva = new Reserva();
        reserva.setFechaInicial(r.getFechaInicial());
        reserva.setFechaFinal(r.getFechaFinal());
        reserva.setHoraLLegada(LocalTime.parse(r.getHoraLlegada()));
        reserva.setProducto(producto);
        reserva.setUsuario(usuario);

        return reserva;
    }

    public static ReservaByUsuarioDto MapReservaByUsuario(Reserva r){
        ReservaByUsuarioDto reserva = new ReservaByUsuarioDto();
        reserva.setId(r.getId());
        reserva.setStart(r.getFechaInicial());
        reserva.setEnd(r.getFechaFinal());
        reserva.setProducto(r.getProducto());
        reserva.setIdUsuario(r.getUsuario().getId());

        return reserva;
    }

    public static ImagenDto MapImagen(Imagen imagen){
        ImagenDto imagenDto = new ImagenDto();
        imagenDto.setId(imagen.getId());
        imagenDto.setTitulo(imagen.getTitulo());
        imagenDto.setURL(imagen.getURL());
        imagenDto.setIdProducto(imagen.getProducto().getId());

        return imagenDto;
    }

    public static Producto MapProducto(ProductoRequest prod, Set<Caracteristica> caracteristicas, Politica politica, Ciudad ciudad, Provincia provincia, Categoria categoria, Usuario usuario){
        Producto producto = new Producto();
        producto.setTitulo(prod.getTitulo());
        producto.setTituloDescripcion(prod.getTituloDescripcion());
        producto.setDescripcion(prod.getDescripcion());
        producto.setDisponibilidad(prod.getDisponibilidad());
        producto.setImagenPrincipalURL(prod.getImagenesURL().get(0));
        producto.setUbicacion(prod.getUbicacion());
        producto.setCaracteristicasDelProducto(caracteristicas);
        producto.setPolitica(politica);
        producto.setCiudad(ciudad);
        producto.setCategoria(categoria);
        if(provincia.getProvincia()!=null)
            producto.setProvincia(provincia);
        producto.setPrecio(prod.getPrecio());
        producto.setUsuario(usuario);
        return producto;
    }
}
