import { format } from 'date-fns';
import { set } from 'date-fns/esm';
import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading/Loading"


const AvailableAppointment = ({ date }) => {

    const fomatedDate = format(date || new Date(), 'PP')

    const [treatment, setTreatment] = useState(null)

    // const [services, setServices] = useState([])
    // useEffect(() => {

    //     fetch(`http://localhost:5000/available?date=${fomatedDate}`)
    //         // fetch(`services.json`)

    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setServices(data)
    //         })

    // }, [fomatedDate])


    const { data: services, isLoading, refetch } = useQuery(['available', fomatedDate], () =>

        fetch(`http://localhost:5000/available?date=${fomatedDate}`)
            .then(res => res.json())

    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='text-center text-2xl text-secondary'> Available Appointments on {format(date || new Date(), 'PP')}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}></Service>)
                }
            </div>

            {
                treatment && <BookingModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;