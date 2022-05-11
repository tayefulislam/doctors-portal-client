import React from 'react';

import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <>
            <div className='px-12'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>


            </div>

            <MakeAppointment></MakeAppointment>
        </>
    );
};

export default Home;