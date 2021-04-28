import React from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Portfolio from '../Portfolio/Portfolio';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import SalePart from '../SalePart/SalePart';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeaderMain />
            <Services />
            <SalePart />
            <Reviews />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default Home;