package com.example.restaurant.demo.restaurant.controller;

import com.example.restaurant.demo.restaurant.model.CustomerReq;
import com.example.restaurant.demo.restaurant.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @PostMapping("/saveCustomer")
    public ResponseEntity<?> saveCustomer(@RequestBody CustomerReq customerReq){
        return new ResponseEntity<>(customerService.saveCustomer(customerReq), HttpStatus.CREATED);
    }
    @GetMapping("/")
    public ResponseEntity<?> getAllCustomer(){
        return new ResponseEntity<>(customerService.getAllCustomer(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomerById(@PathVariable Integer id){
        return new ResponseEntity<>(customerService.getCustomerById(id), HttpStatus.OK);
    }
    @DeleteMapping("/deleteCustomer/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable Integer id){
        return new ResponseEntity<>(customerService.deleteCustomer(id), HttpStatus.OK);
    }

    @PutMapping("/updateCustomer/{id}")
    public ResponseEntity<?> updateCustomer(@RequestBody CustomerReq customerReq, @PathVariable Integer id){
        return new ResponseEntity<>(customerService.updateCustomer(customerReq,id), HttpStatus.CREATED);
    }



}
