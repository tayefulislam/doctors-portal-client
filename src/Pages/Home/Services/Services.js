import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'

import Service from '../Service/Service';


const Services = () => {

    const services = [

        { id: 1, title: 'Fluoride Treatment', detail: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: fluoride },
        { id: 2, title: 'Cavity Filling', detail: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: cavity },
        { id: 3, title: 'Teeth Whitening', detail: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: whitening },


    ]
    return (
        <div className='mt-20'>

            <h3 className='font-bold text-center text-secondary'>OUR SERVICES</h3>
            <h1 className='text-center text-3xl'>Services We Provide</h1>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service.id}
                        service={service}></Service>)
                }
            </div>


            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row lg:p-12">

                    <img src={treatment} alt='' className="max-w-md rounded-xl w-full lg:p-5" />

                    <div className='lg:p-12'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Services;