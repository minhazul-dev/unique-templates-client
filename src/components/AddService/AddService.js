import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {
        console.log(data)
        const serviceData = {
            name: data.name,
            price: data.price,
            image: imageUrl
        }
        const url = `https://protected-peak-79922.herokuapp.com/addService`
        console.log(serviceData);
        fetch(url, {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(serviceData)
        })
            .then(response => console.log('server side response', response))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '5cd04e93ade3622cf5f68255f87f8b6f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',

            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
                // setImageUrl(response.data.data.display_url);
                // if (response) {
                //     console.log(response);
                // }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="row">
            <div className="col-md-6 mt-5">
                <div className="form-section p-5 " style={{ backgroundColor: '#96b0bc' }} >
                    <h4 className="text-center mt-4 text-white">Here you can add Services</h4>
                    <div className="container mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <br />
                            <input defaultValue="name"   {...register("name")} />
                            <input defaultValue="price"  {...register("price")} />
                            <br />
                            <input onChange={handleImageUpload} type="file" />
                            <br />
                            <br />
                            <input type="submit" />
                        </form>

                    </div>
                </div>

            </div>
            {/* <div className="col-md-6">

            </div> */}

        </div>


    );
};

export default AddService;
