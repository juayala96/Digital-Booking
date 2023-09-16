package com.example.demo.proyecto.repository;


import com.example.demo.proyecto.dto.ReservaDto;
import com.example.demo.proyecto.model.Reserva;
import com.example.demo.proyecto.model.jwt.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva,Integer> {
    @Query(" SELECT r FROM Reserva r WHERE r.producto.id = ?1")
    List<Reserva> findReservasByProductParams(Integer productoId);
    List<Reserva> findAllByFechaInicialLessThanEqualAndFechaFinalGreaterThanEqual(LocalDate endDate, LocalDate startDate);
    List<Reserva> findByUsuario(Usuario usuario);
}
