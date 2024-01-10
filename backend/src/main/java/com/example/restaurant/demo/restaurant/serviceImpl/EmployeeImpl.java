package com.example.restaurant.demo.restaurant.serviceImpl;

import com.example.restaurant.demo.restaurant.Dto.EmployeeDto;
import com.example.restaurant.demo.restaurant.Dto.LoginDto;
import com.example.restaurant.demo.restaurant.model.Employee;
import com.example.restaurant.demo.restaurant.repository.EmployeeRepo;
import com.example.restaurant.demo.restaurant.response.LoginResponse;
import com.example.restaurant.demo.restaurant.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeImpl implements EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addEmployee(EmployeeDto employeeDTO) {
        Employee employee = new Employee(
                employeeDTO.getId(),
                employeeDTO.getUsername(),
                employeeDTO.getEmail(),
                this.passwordEncoder.encode(employeeDTO.getPassword())
        );
        employeeRepo.save(employee);
        return employee.getUsername();
    }
    EmployeeDto employeeDTO;
    @Override
    public LoginResponse loginEmployee(LoginDto loginDTO) {
        String msg = "";
        Employee employee1 = employeeRepo.findByUsername(loginDTO.getUsername());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Employee> employee = employeeRepo.findOneByUsernameAndPassword(loginDTO.getUsername(), encodedPassword);
                if (employee.isPresent())
                {
                    return new LoginResponse("Login Success", true);
                } else
                {
                    return new LoginResponse("Login Failed", false);
                }
            } else
            {
                return new LoginResponse("password Not Match", false);
            }
        }else
        {
            return new LoginResponse("Username not exits", false);
        }
    }
}
