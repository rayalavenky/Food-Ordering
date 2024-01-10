package com.example.restaurant.demo.restaurant.repository;

import com.example.restaurant.demo.restaurant.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@EnableJpaRepositories
@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer>
{
    Optional<Employee> findOneByUsernameAndPassword(String username, String password);
    Employee findByUsername(String username);
}
