import React from 'react';

const Service = ({ service }) => {

    const { title, detail, img } = service;
    return (
        <div class="card w-96 shadow-md">
            <figure class="px-10 pt-10">
                <img className='' src={img} alt={title} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{detail}</p>

            </div>
        </div>
    );
};

export default Service;