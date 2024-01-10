import React, { useEffect, useState } from 'react'
import customerService from '../service/customer.service';
import { useNavigate, useParams } from 'react-router-dom';

const ReOrder = () => {


    const [customer,setCustomer]=useState({
        customerName:"",
        address:"",
        mobileNumber:"",
        foodItem:"",
        quantity:"",
    });
    const navigate = useNavigate();

    const {id} = useParams();
    console.log(id);


    const [msg,setMsg] = useState("");

    useEffect(()=> {
        customerService.getCustomerById(id).then((res)=> {
            setCustomer(res.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    const handleChange=(e)=>{
        const value = e.target.value;
        setCustomer({...customer,[e.target.name]: value});
    };

    const OrderUpdate = (e) => {
        e.preventDefault();

        customerService
            .updateCustomer(customer)
            .then((res) => {
                navigate("/myorders");
            })
            .catch((error) => {
                console.log(error);
            });
    };
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
                            <form onSubmit={(e)=>OrderUpdate(e)}>
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
                                <button className='btn btn-primary col-md-12'>Re Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default ReOrder;
