package com.example.restaurant.demo.restaurant.service;

import com.example.restaurant.demo.restaurant.Dto.EmployeeDto;
import com.example.restaurant.demo.restaurant.Dto.LoginDto;
import com.example.restaurant.demo.restaurant.response.LoginResponse;

public interface EmployeeService {
    String addEmployee(EmployeeDto employeeDTO);
    LoginResponse loginEmployee(LoginDto loginDTO);
}
