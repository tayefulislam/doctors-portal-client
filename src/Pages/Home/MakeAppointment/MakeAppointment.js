import React from 'react';
import doctor from '../../../assets/images/doctor.png';
// import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeAppointment = () => {
    const bgStyle = {
        // backgroundImage: `url(${appointment})`,
        background: `url(${appointment})`
    }
    return (
        <section style={bgStyle}
            className='flex justify-center items-center mt-28 mb-10'>

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-160px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 py-12 px-8 lg:py-1 lg:px-6'>
                <h3 className='text-xl font-bold text-secondary'>Appointment</h3>
                <h1 className='text-white text-4xl'>Make an appointment Today</h1>
                <p className='text-white text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>






        </section>
    );
};

export default MakeAppointment;