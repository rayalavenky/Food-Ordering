package com.example.restaurant.demo.restaurant.serviceImpl;

import com.example.restaurant.demo.restaurant.model.CustomerReq;
import com.example.restaurant.demo.restaurant.repository.CustomerRepository;
import com.example.restaurant.demo.restaurant.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public CustomerReq saveCustomer(CustomerReq customer) {
        return customerRepo.save(customer);
    }

    @Override
    public List<CustomerReq> getAllCustomer() {
        return customerRepo.findAll();
    }

    @Override
    public CustomerReq getCustomerById(Integer id) {
        return customerRepo.findById(id).get();
    }

    @Override
    public String deleteCustomer(Integer id) {
        CustomerReq customer = customerRepo.findById(id).get();

        if (customer!=null)
        {
            customerRepo.delete(customer);
            return "Customer Deleted Successfully";
        }
        return "There is No Customer";
    }

    @Override
    public CustomerReq updateCustomer(CustomerReq customer, Integer id) {

        CustomerReq oldCustomer = customerRepo.findById(id).get();
        oldCustomer.setCustomerName(customer.getCustomerName());
        oldCustomer.setAddress(customer.getAddress());
        oldCustomer.setMobileNumber(customer.getMobileNumber());
        oldCustomer.setFoodItem(customer.getFoodItem());
        oldCustomer.setQuantity(customer.getQuantity());

        return customerRepo.save(oldCustomer);
    }

}
