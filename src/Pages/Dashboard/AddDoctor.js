import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const url = `http://localhost:5000/servicesName`;
    const { data: services, isLoading } = useQuery('servicesName', () => fetch(url).then(res => res.json()))

    // console.log(services)

    const imgStorageKey = `9cd5e61d7a901b45375cbd68ce720bfe`;


    const onSubmit = async data => {

        toast('Photo Is Uploading')
        const formData = new FormData();

        console.log(data)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`

        const image = data.image[0];
        formData.append('image', image)

        fetch(url, {
            method: 'POST',
            body: formData,
        })

            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    toast('Photo Is Uploaded')

                    // console.log(result)
                    const img = result.data.url;
                    // console.log(img)

                    const doctor = {
                        image: img,
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality
                    }
                    console.log(doctor)

                    // send to data base

                    const url = `http://localhost:5000/addDoctor`

                    fetch(url, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.insertedId) {
                                toast('Doctor Added')
                                reset()
                            }
                        })

                }

            })





    };


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <h1 className='text-2xl'>Add A Doctor</h1>


            <form className='' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>


                    <input type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {

                            required: {
                                value: true,
                                message: 'Name is Required'
                            },


                        })}


                    />


                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.name.message}</span>}



                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>

                    <input type="text"
                        placeholder="Email Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {

                            required: {
                                value: true,
                                message: 'Please Enter A Email Address'
                            }
                        })}


                    />


                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.email.message}</span>}



                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>

                    </label>

                    <select
                        type='text' class="select select-bordered w-full max-w-xs"
                        {...register("speciality", {

                            required: {
                                value: true,
                                message: 'Speciality is required'
                            }
                        })}

                    >
                        {
                            services.map(service => <option
                                key={service?._id}
                                value={service?.name}>{service?.name}</option>)
                        }

                    </select>




                    <label className="label">
                        {errors.speciality?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.speciality.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>


                    <input type="file"

                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {

                            required: {
                                value: true,
                                message: 'Name is Required'
                            },


                        })}


                    />


                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.image.message}</span>}



                    </label>
                </div>

                <input className='btn  w-full max-w-xs' type="submit" value="Add To Database" />
            </form>

        </div>
    );
};

export default AddDoctor;