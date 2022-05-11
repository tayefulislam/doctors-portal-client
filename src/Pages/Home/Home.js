import React from 'react';

import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';
import HomeContactUs from './HomeContactUs/HomeContactUs';
import Footer from '../Shared/Footer/Footer';

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
            <HomeContactUs></HomeContactUs>

            <Footer></Footer>
        </>
    );
};

export default Home;