import React from 'react';
import phoneImg from '../../../assets/icons/phone.svg';
import clockImg from '../../../assets/icons/clock.svg';
import InfoCard from '../InfoCard/InfoCard';
import locationImg from '../../../assets/icons/marker.svg';

const Info = () => {



    const clock = {
        name: 'Opening Hours', detail: 'Lorem Ipsum is simply dummy text of the pri', img: clockImg, bgTitle: 'bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary'
    };

    const location = { name: 'Visit our location', detail: 'Brooklyn, NY 10036, United States', img: locationImg, bgTitle: 'bg-accent' };

    const phone = { name: 'Contact us now', detail: '+000 123 456789', img: phoneImg, bgTitle: 'bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary' };


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-9 mb-2'>
            <InfoCard cardInfo={clock}></InfoCard>
            <InfoCard cardInfo={location}></InfoCard>
            <InfoCard cardInfo={phone}></InfoCard>


        </div>
    );
};

export default Info;