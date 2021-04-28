import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const noNamed = [
        { name: "App landing Page", link: "/emergency" },
        { name: "Servicing", link: "/checkup" },
        { name: "WordPress Site", link: "/personal-treatment" },
        { name: "Backend with PHP", link: "/tooth-extract" },
        { name: "Backend With node", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Emergency Landing page", link: "/emergency" },
        { name: "Single products", link: "/checkup" },
        { name: "UI design only", link: "/personal-treatment" },
        { name: "Bootstrap", link: "/tooth-extract" },
        { name: "SASS", link: "/checkup" },
        { name: "React-Bootstrap", link: "/checkup" },
        { name: "CSS", link: "/checkup" }
    ]
    const services = [
        { name: "Npm manager", link: "/emergency" },
        { name: "React", link: "/checkup" },
        { name: "React Hook Form", link: "/personal-treatment" },
        { name: "Fontawesome", link: "/tooth-extract" },
        { name: "Google Map", link: "/checkup" },
        { name: "Stripe", link: "/checkup" },
        { name: "SSLcommerze", link: "/checkup" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="UI " menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;