import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {

    const { _id, name, slots, price } = treatment;
    console.log(price)

    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault()

        const treatmentId = _id;
        const treatment = name;
        const date = event.target.date.value;
        const slot = event.target.time.value;

        const patientName = event.target.name.value;
        const patientEmail = event.target.email.value;
        const phone = event.target.number.value;

        const booking = {
            treatmentId,
            treatment,
            date,
            slot,
            patientName,
            price,
            patientEmail,
            phone
        }

        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.success) {

                    toast(`Appiontment Booked for ${slot} on ${date}`)

                }

                if (!data.success) {

                    toast(`You Have already  Booked for ${slot} on ${date}`)
                }
                refetch()
                setTreatment(null)
            })




    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal  sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-secondary text-center mb-5">{treatment.name}</h3>



                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 justify-items-center'>


                        <input type="text" name='date' disabled value={format(date || new Date(), 'PP')} placeholder="Date" className="input input-bordered w-full max-w-xs" />

                        <select name='time' className="select select-bordered w-full max-w-xs">

                            {
                                slots.map((slot, index) => <option
                                    key={index} value={slot}>{slot}</option>)
                            }
                            {/* slots.map((slot, index) array te 3 perameter dawa ay armodde ekti hocche array index 
                             */}

                        </select>


                        <input type="text" name='name' disabled required value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="email" disabled name='email' required value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name='number' required placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />


                        <input type="submit" value="SUBMIT" className="btn btn-secondary  w-full max-w-xs" />

                    </form>
                    {/* <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;