import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {slots.length > 0 ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500 text-sm'>Please Try Another Day</span>}
                </p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>

                <div class="card-actions justify-center">

                    <label class="btn btn-secondary text-white" for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                    >Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;