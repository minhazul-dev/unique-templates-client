import React from 'react';

import main_device_image from '../../../images/hFinal.jpg'

const HeaderMain = () => {
    return (
        <section style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>WE CREATE AWESOME <br /> WEB TEMPLATES </h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-secondary">LEARN MORE</button>
            </div>
            <div className="col-md-6">
                <img style={{ height: '600px' }} className="img-fluid" src={main_device_image} alt="" className="img-fluid" />
            </div>
        </section>
    );
};

export default HeaderMain;
