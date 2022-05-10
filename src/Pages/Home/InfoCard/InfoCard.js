import React from 'react';

const InfoCard = ({ cardInfo }) => {
    const { name, img, bgTitle, detail } = cardInfo;
    console.log(img)
    return (
        <div class={`card lg:card-side shadow-xl ${bgTitle} px-5 pt-1`}>

            <figure>
                <img src={img} alt='' />

            </figure>

            <div class="card-body text-white">
                <h2 class="card-title">{name}</h2>
                <p>{detail}</p>

            </div>
        </div>
    );
};

export default InfoCard;