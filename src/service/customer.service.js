import axios from "axios";

const API_URL= "http://localhost:9090";

class CustomerService{
    saveCustomer(customer) {
        return axios.post(API_URL+"/saveCustomer",customer);
    }

    getAllCustomer() {
        return axios.get(API_URL+"/");
    }

    getCustomerById(id) {
        return axios.get(API_URL+"/" + id);
    }

    deleteCustomer(id) {
        return axios.delete(API_URL+"/deleteCustomer/"+id);
    }

    updateCustomer(customer) {
        return axios.put(API_URL+"/updateCustomer/" + customer.id,customer);
    }
}

export default new CustomerService;