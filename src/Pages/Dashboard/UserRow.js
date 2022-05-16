import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


const UserRow = ({ user, index, refetch }) => {

    const { role } = user;


    const makeAdmin = () => {
        const url = `http://localhost:5000/user/admin/${user.email}`;

        fetch(url, {
            method: 'PUT',
            authorzation: `Bearer ${localStorage.getItem('accessToken')}`
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success(`Admin Make Sussess Full`)
            })

    }
    const makeUser = () => {
        const url = `http://localhost:5000/user/user/${user.email}`;

        fetch(url, {
            method: 'PUT',
            authorzation: `Bearer ${localStorage.getItem('accessToken')}`
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success(`USer Make Sussess Full`)
            })

    }


    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{user?.email}</td>
            <td>
                {
                    role !== 'admin' ? <button onClick={makeAdmin} class="btn">Make Admin</button> : <button onClick={makeUser} class="btn">Make User</button>
                }</td>

            <td><button className="btn">X</button></td>


        </tr>
    );
};

export default UserRow;