import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import customerService from '../service/customer.service';

const MyOrders = () => {

    const [customerList, setCustomerList] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        {
            customerService
                .getAllCustomer().then((res) => {
                    setCustomerList(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const deleteCustomer = (id) => {
        customerService.deleteCustomer(id)
            .then((res) => {
                setMsg("Cancel Order Successfully");
                init();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                All Food Ordered Customers List
                                {
                                    msg && <p className='fs-4 text-center text-success'>{msg}</p>
                                }
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">mobileNumber</th>
                                            <th scope="col">foodItem</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            customerList.map((c, num) => (
                                                <tr key={c.id}>
                                                    <td>{num + 1}</td>
                                                    <td>{c.customerName}</td>
                                                    <td>{c.address}</td>
                                                    <td>{c.mobileNumber}</td>
                                                    <td>{c.foodItem}</td>
                                                    <td>{c.quantity}</td> 
                                                    <td>
                                                        <Link to={"/reorder/${c.id}" + c.id} className="btn btn-sm btn-primary">Re-Order</Link>
                                                        <button onClick={() => deleteCustomer(c.id)} className="btn btn-sm btn-danger ms-0">Cancel</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyOrders;
