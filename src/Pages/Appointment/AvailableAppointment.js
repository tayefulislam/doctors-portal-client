import { format } from 'date-fns';
import { set } from 'date-fns/esm';
import React, { useState, useEffect } from 'react';
import Service from './Service';


const AvailableAppointment = ({ date }) => {


    const [services, setServices] = useState([])

    useEffect(() => {

        fetch(`services.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })

    }, [])


    return (
        <div>
            <h4 className='text-center text-2xl text-secondary'> Available Appointments on {format(date || new Date(), 'PP')}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;