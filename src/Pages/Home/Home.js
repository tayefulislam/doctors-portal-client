import React from 'react';

import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <div className='px-12'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>


            </div>

            <MakeAppointment></MakeAppointment>
            <div className='px-12'>
                <Testimonial></Testimonial>
            </div>
        </>
    );
};

export default Home;