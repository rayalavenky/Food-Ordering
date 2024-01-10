package com.example.restaurant.demo.restaurant.repository;

import com.example.restaurant.demo.restaurant.model.CustomerReq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface CustomerRepository extends JpaRepository<CustomerReq,Integer> {
}
