package com.example.restaurant.demo.restaurant.Dto;

import lombok.Data;

@Data
public class EmployeeDto {

    private int id;
    private String username;
    private String email;
    private String password;
    public EmployeeDto() {
    }
    public EmployeeDto(int id, String username, String email, String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
