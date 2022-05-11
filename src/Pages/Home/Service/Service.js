import React from 'react';

const Service = ({ service }) => {

    const { title, detail, img } = service;
    return (
        <div className="card w-auto shadow-md">
            <figure className="px-10 pt-10">
                <img className='w-auto sm:display:none rounded-xl' src={img} alt={title} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{detail}</p>

            </div>
        </div>
    );
};

export default Service;