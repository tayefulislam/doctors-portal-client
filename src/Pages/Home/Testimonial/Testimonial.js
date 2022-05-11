import React from 'react';

import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonial = () => {

    const testimonials = [
        { id: 1, name: "Winson Herry", detail: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", area: "California", img: people1 },

        { id: 2, name: "Winson Herry", detail: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", area: "California", img: people2 },

        { id: 3, name: "Winson Herry", detail: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", area: "California", img: people3 },
    ]



    return (
        <section>

            <div className='flex justify-between items-center mb-5'>
                <div>
                    <h3 className='text-xl font-bold text-secondary'>Testimonial</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>

                <img className='w-24 md:w-32 lg:w-48' src={quote} alt="" />

            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>


                {
                    testimonials.map(testimonial =>
                        <div class="card w-auto bg-base-100 shadow-xl">


                            <div class="card-body w-auto items-center">

                                <p className='font-semibold'>{testimonial.detail}</p>
                                <div className='grid grid-cols-2 items-center mt-5'>
                                    {/* <img src={testimonial.img} alt="" /> */}
                                    <div class="avatar">
                                        <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                            <img src={testimonial.img} alt="" />
                                        </div>
                                    </div>

                                    <div >
                                        <h2 className='text-xl font-bold'>{testimonial.name}</h2>
                                        <h4 className='text-md font-bold'>{testimonial.area}</h4></div>

                                </div>
                            </div>
                        </div>
                    )
                }







            </div>


        </section>
    );
};

export default Testimonial;