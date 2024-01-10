import React, { useEffect, useState } from 'react'
import customerService from '../service/customer.service';
import { useLocation, useNavigate } from 'react-router-dom';

const Orders = () => {
    const location = useLocation();
    const navigated=useNavigate();

    const [customer,setCustomer]=useState({
        customerName:location.state?.customerName||"",
        address:"",
        mobileNumber:"",
        foodItem:"",
        quantity:"",
    });
    const navigate = useNavigate();
    const [msg,setMsg] = useState("");
    const [timer, setTimer] = useState(null);

    const handleChange=(e)=>{
        const value = e.target.value;
        setCustomer({...customer,[e.target.name]: value});
    };

    const FoodOrder = (e) => {
        e.preventDefault();

        customerService
            .saveCustomer(customer)
            .then((res) => {
                console.log("Customer ordered Successfully");
                setMsg("Customer ordered Successfully");

                const timerId = setTimeout(() =>{
                    setMsg("Delivered successfully");
                    navigate("/myorders");
                },0);

                setTimer(timerId);

                setCustomer({
                  customerName:location.state?.customerName ||"",
                  address:"",
                  mobileNumber:"",
                  foodItem:"",
                  quantity:"",
                });
                navigate("/myorders");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(()=> {
        return () => {
            if(timer) {
                clearTimeout(timer);
            }
        };
    },[timer]);

  return (
    <div>
        <div className="Container mt-3">
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header fs-3 text-center'>
                              Order Food
                        </div>
                        {
                            msg &&

                            <p className='fs-4 text-center text-success'>{msg}</p>
                        }                        
                            <div className='card-body'>
                            <form onSubmit={(e)=>FoodOrder(e)}>
                                <div className='mb-3'>
                                    <label>Enter Customer Name</label>
                                    <input type='text' name='customerName' className='form-control' onChange={(e)=>handleChange(e)} value={customer.customerName}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Address</label>
                                    <input type='text' name='address' className='form-control' onChange={(e)=>handleChange(e)} value={customer.address}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Enter mobileNumber</label>
                                    <input type='text' name='mobileNumber' className='form-control' onChange={(e)=>handleChange(e)} value={customer.mobileNumber}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Food Item</label>
                                    <input type='text' name='foodItem' className='form-control' onChange={(e)=>handleChange(e)} value={customer.foodItem}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Quantity</label>
                                    <input type='text' name='quantity' className='form-control' onChange={(e)=>handleChange(e)} value={customer.quantity}/>
                                </div>
                                <button className='btn btn-primary col-md-12'>Order Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Orders;
