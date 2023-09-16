package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Politica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PoliticaRepository extends JpaRepository<Politica,Integer> {
}
