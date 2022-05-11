import React from 'react';

import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' class="max-w-md rounded-lg shadow-2xl w-full" />
                <div className=''>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    {/* <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button> */}

                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;