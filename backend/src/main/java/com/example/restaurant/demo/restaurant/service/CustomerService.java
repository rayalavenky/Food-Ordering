package com.example.restaurant.demo.restaurant.service;

import com.example.restaurant.demo.restaurant.model.CustomerReq;

import java.util.List;

public interface CustomerService {

    public CustomerReq saveCustomer(CustomerReq customer);

    public List<CustomerReq> getAllCustomer();
    public CustomerReq getCustomerById(Integer id);
    public String deleteCustomer(Integer id);
    public CustomerReq updateCustomer(CustomerReq customer,Integer id);


}
