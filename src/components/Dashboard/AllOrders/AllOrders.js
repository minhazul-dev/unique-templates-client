import React from 'react';


const AllOrders = ({ orders }) => {
    // console.log(orders);

    return (
        <div className="container mt-5">
            <h3 className="text-center text-info">All ORDERED PRODUCTS : {orders.length} (with Email, Price and Date)</h3>

            {
                orders.map((order) => <div className="container mt-5">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>{order.email}</td>
                                <td>{order.price} </td>
                                <td>{(new Date(order?.lastModifiedDate).toDateString('dd/mm/yyyy'))}</td>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Status
  </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }

        </div>
    );
};

export default AllOrders;