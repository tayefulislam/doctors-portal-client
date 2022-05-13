import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary">{name}</h2>
                <p>
                    {slots.length > 0 ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500 text-sm'>Please Try Another Day</span>}
                </p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>

                <div className="card-actions justify-center">

                    <label className="btn btn-secondary text-white bg-gradient-to-r from-secondary to-primary" for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                    >Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;