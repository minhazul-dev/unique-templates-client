import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import ManageServices from '../ManageServices/ManageServices';

const Manage = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://protected-peak-79922.herokuapp.com/services')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                // console.log(data);
                setLoading(false)
            })

    }, [])
    return (
        <section>
            <h2 className="text-danger text-center mt-4">SERVICES WILL BE DELETED PERMANENTLY</h2>

            <div className="container mt-5 row">
                {

                    loading ? <ReactBootstrap.Button variant="primary" disabled>
                        <ReactBootstrap.Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    Please Wait For A While
                </ReactBootstrap.Button> : products.map(pd => <ManageServices pd={pd}></ManageServices>)
                }

            </div>
        </section>
    );
};

export default Manage;