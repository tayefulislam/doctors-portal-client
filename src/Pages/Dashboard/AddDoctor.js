import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const url = `http://localhost:5000/servicesName`;
    const { data: services, isLoading } = useQuery('servicesName', () => fetch(url).then(res => res.json()))

    console.log(services)




    const onSubmit = async data => {
        console.log(data)

        //http://localhost:5000/serviceName
        // navigate(from, { replace: true });

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

                <input className='btn  w-full max-w-xs' type="submit" value="Add To Database" />
            </form>

        </div>
    );
};

export default AddDoctor;