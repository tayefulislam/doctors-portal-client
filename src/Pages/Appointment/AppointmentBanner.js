import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import bn from 'date-fns/locale/bn';


const AppointmentBanner = ({ date, setDate }) => {

    // const [date, setDate] = useState(new Date());



    return (
        <div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='Doctor chair' className="max-w-sm rounded-lg shadow-2xl" />

                    <div className=''>
                        <DayPicker
                            mode="single"
                            locale={bn}
                            selected={date}
                            onSelect={setDate}

                        ></DayPicker>
                        {/* <p>You Have Setected : {format(date || new Date(), 'PP')}</p> */}
                    </div>


                </div>

            </div>



        </div>
    );
};

export default AppointmentBanner;