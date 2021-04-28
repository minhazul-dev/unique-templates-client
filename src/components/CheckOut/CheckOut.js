import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Shared/SideBar/SideBar';

const CheckOut = () => {
    const { _id } = useParams()
    const [details, setDetails] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        const url = `https://protected-peak-79922.herokuapp.com/services`
        fetch(url)
            .then(response => response.json())
            .then((data) => setDetails(data))
    }, [])
    const allDetails = details.find((detail) => _id == detail._id);
    console.log(allDetails);
    const handleOrders = (e) => {
        let date = new Date()
        const totalProduct = { name: e.name, price: e.price, lastModifiedDate: date }
        console.log(totalProduct);
        const newOrders = { ...loggedInUser, ...totalProduct };
        fetch('https://protected-peak-79922.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrders)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('order placed successfully')
                }
                // console.log(data)
            })

    }
    return (

        <section className="row">
            <div className="col-md-6">
                <Sidebar />

            </div>

            <div className="container mt-5 col-md-6">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col"> Product Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{allDetails?.name}</td>
                            <td> {allDetails?.price}</td>
                        </tr>

                    </tbody>

                </table>
                <hr></hr>

                <div className="mt-5">
                    <ProcessPayment />
                </div>

                <button onClick={() => handleOrders(allDetails)} type="button" class="btn btn-secondary float-right">Place Order</button>

            </div>


        </section>
    );
};

export default CheckOut;