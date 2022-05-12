import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const { name, slots } = treatment;

    const handleSubmit = event => {
        event.preventDefault()

        const date = event.target.date.value;
        const time = event.target.time.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;

        const book = { date, time, name, email, number }


        console.log(book)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-secondary text-center mb-5">{treatment.name}</h3>



                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 justify-items-center'>


                        <input type="text" name='date' disabled value={format(date || new Date(), 'PP')} placeholder="Date" class="input input-bordered w-full max-w-xs" />

                        <select name='time' class="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>


                        <input type="text" name='name' required placeholder="Your Name" class="input input-bordered w-full max-w-xs" />

                        <input type="email" name='email' required placeholder="Email" class="input input-bordered w-full max-w-xs" />

                        <input type="text" name='number' required placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />


                        <input type="submit" value="SUBMIT" class="btn btn-secondary  w-full max-w-xs" />

                    </form>
                    {/* <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;