import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Orders from '../../Orders/Orders';
import AllOrders from '../AllOrders/AllOrders';
import SidebarD from '../SidebarD/SideBarD';


const Dashboard = () => {

    const [orders, allOrders] = useState([])
    useEffect(() => {
        fetch('https://protected-peak-79922.herokuapp.com/allOrders')
            .then(response => response.json())
            .then(data => allOrders(data))
    }, [])

    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`https://protected-peak-79922.herokuapp.com/isAdmin?email=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    console.log(isAdmin);

    return (
        <div>

            <section className="row">
                <div className="col-md-4">
                    <SidebarD />
                </div>
 
                {
                    isAdmin ? <div className="col-md-4 mt-5">
                        <AllOrders orders={orders} />
                    </div>
                    :
                    <div className="col-md-4">
                    <Orders />
                </div>
                }
                
                

            </section>
        </div>
    );
};

export default Dashboard;