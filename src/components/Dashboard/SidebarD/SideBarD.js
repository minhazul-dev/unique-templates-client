import { faCalendar, faCog, faFileAlt, faGripHorizontal, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './SidebarD.css'

const SidebarD = () => {

    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    useEffect(() => {
        fetch(`https://protected-peak-79922.herokuapp.com/isAdmin?email=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {
                    isAdmin && <>  <li>
                        <Link to="/addServices" className="text-white" >
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Services</span>
                        </Link>
                    </li>
                        <li>
                            <Link to="/manage" className="text-white" >
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeadmin" className="text-white" >
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
                            </Link>
                        </li>
                    </>
                }
                <li>
                    <Link to="/AddReview" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Write Review</span>
                    </Link>
                </li>

                <li>
                    <Link to="/Orders" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Orders</span>
                    </Link>
                </li>

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SidebarD;