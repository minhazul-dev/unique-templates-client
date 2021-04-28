import React from 'react';
import Particles from 'react-particles-js';
import saleImg from '../../../images/Nordstrom-Rack-Clear-The-Rack-Sale.jpg'
const SalePart = () => {
	return (
		<div className="bg-info container mb-3">


			<img className="img-fluid" src={saleImg} alt="" />
			<Particles
				params={{
					"particles": {
						"number": {
							"value": 50
						},
						"size": {
							"value": 10
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": true,
								"mode": "repulse"
							}
						}
					}
				}}

			/>
		</div>
	);
};

export default SalePart;