import React from 'react';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);



    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);



    const [token] = useToken(user || gUser)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    let signInLoading;
    let allErrors;

    const navigate = useNavigate()



    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    if (loading || gLoading || updating) {
        // signInLoading = <progress className="progress w-full"></progress>
        return <Loading></Loading>

    }

    if (error || gError || updateError) {

        allErrors = `${error?.message || gError?.message || updateError?.message} `

    }



    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })



        // navigate(from, { replace: true });

    };


    if (gUser || user) {
        console.log(user)
        // navigate('/')
        // navigate(from, { replace: true });

    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

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
                                    },

                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Plase Provied a Valid Email Adderess',
                                    }
                                })}


                            />


                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt  text-red-500 text-sm">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>

                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'Please Enter A Password'
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Plase Provied A password whice content more than 6 letter'
                                    }
                                })}


                            />


                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}


                            </label>
                        </div>
                        {signInLoading}

                        {allErrors}

                        <input className='btn  w-full max-w-xs' type="submit" value="Login" />
                    </form>

                    <p className='text-lg'><small>Already Have Account? <Link className='text-secondary' to='/login'>Sign Up</Link ></small></p>



                    <div className="divider">OR</div>




                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>



                </div>
            </div>
        </div>
    );
};

export default SignUp;