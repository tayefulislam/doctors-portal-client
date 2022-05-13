import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {





    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);




    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    let allErrors;
    const navigate = useNavigate()

    if (loading || gLoading) {
        // signInLoading = <progress class="progress w-full"></progress>
        return <Loading></Loading>

    }

    if (error || gError) {

        allErrors = `${error?.message || gError?.message}`

    }







    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)

    };


    if (gUser || user) {
        console.log(user || gUser)
        navigate('/')

    }





    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            <input type="text"
                                placeholder="Type here"
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
                                placeholder="Type here"
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


                        {allErrors}

                        <input className='btn  w-full max-w-xs' type="submit" value="Login" />
                    </form>

                    <p className='text-lg'><small>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link ></small></p>



                    <div className="divider">OR</div>




                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>



                </div>
            </div>
        </div>
    );
};

export default Login;