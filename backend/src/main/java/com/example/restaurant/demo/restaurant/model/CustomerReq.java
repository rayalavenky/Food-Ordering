package com.example.restaurant.demo.restaurant.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class CustomerReq {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String customerName;
    private String address;
    private String mobileNumber;
    private String foodItem;
    private Integer quantity;

    public CustomerReq(String customerName, String address, String mobileNumber, String foodItem, Integer quantity) {
        this.customerName = customerName;
        this.address = address;
        this.mobileNumber = mobileNumber;
        this.foodItem = foodItem;
        this.quantity = quantity;
    }

    public CustomerReq() {
        // Default constructor
    }

    @Override
    public String toString() {
        return "CustomerReq{" +
                "id=" + id +
                ", customerName='" + customerName + '\'' +
                ", address='" + address + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", foodItem='" + foodItem + '\'' +
                ", quantity=" + quantity +
                '}';
    }
}
