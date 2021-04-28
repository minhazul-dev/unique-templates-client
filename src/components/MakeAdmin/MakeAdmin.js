import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const onSubmit = data => {
        console.log(data)
        const serviceData = {
            name: data.name,
            email:data.email 
        }
        const url = `https://protected-peak-79922.herokuapp.com/adminEmail`
        console.log(serviceData);
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loggedInUser)
        })
            .then(response => console.log('server side response', response))
    };

    const handleMakeAdmin = () => {


        fetch('https://protected-peak-79922.herokuapp.com/adminEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loggedInUser)
        })
            .then(response => console.log('server side response', response))
    }
    return (
        <div className="container">

            {/* <input OnChange={handleMakeAdmin} type="text" placeholder="Enter your email address" />

                <button onClick={handleMakeAdmin} > Make Admin</button> */}
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div className="form-section p-5 " style={{ backgroundColor: '#96b0bc' }} >
                        <h4 className="text-center mt-4 text-white">Here you can Make Admin</h4>
                        <div className="container mt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <br />
                                <input defaultValue="name"   {...register("name")} />
                                <input defaultValue="email"  {...register("email")} />
                                <br />
                                <br />
                                <br />
                                <input type="submit" />
                                <button onClick={handleMakeAdmin} className="ml-3">Send Email via Login</button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MakeAdmin;
