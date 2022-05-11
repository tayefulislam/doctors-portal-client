import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import bgImage from '../../../assets/images/appointment.png'

const HomeContactUs = () => {
    return (
        <div style={{ background: `url(${bgImage})` }} className='text-center mt-14'>

            <h3 className='text-white text-xl text-secondary font-bold '>Contact Us</h3>
            <h1 className='text-white text-4xl'>Stay connected with us</h1>

            <form className='mt-5'>

                <input type="text" placeholder="Email Address" class="input w-full max-w-xs mb-5" /> <br />

                <input type="text" placeholder="Subject" class="input w-full max-w-xs mb-5" /> <br />

                <textarea class="textarea w-full max-w-xs mb-5" placeholder="Your message"></textarea>  <br />

                <PrimaryButton>Submit</PrimaryButton>


            </form>

        </div>
    );
};

export default HomeContactUs;