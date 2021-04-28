import {  faGripHorizontal, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
               
                <li>
                    <Link to="/AddReview" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Write Review</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/orders" className="text-white" >
                      <FontAwesomeIcon icon={faGripHorizontal} /> <span>Orders</span>
                    </Link>
                </li>
                {/* <li>
                    <Link to="/addServices" className="text-white" >
                      <FontAwesomeIcon icon={faFileAlt} /> <span>Add Services</span>
                    </Link>
                </li> */}
        
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;