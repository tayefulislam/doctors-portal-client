import React from 'react';
import useAdmin from '../../hooks/useAdmin'
import { ToastContainer, toast } from 'react-toastify';


const UserRow = ({ user, index, refetch }) => {

    const { role } = user;

    const [isAdmin] = useAdmin(user)


    const makeAdmin = () => {
        const url = `http://localhost:5000/user/admin/${user.email}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You Can not Make Admin')
                }
                return res.json()
            })

            .then(data => {
                // console.log(data)
                if (data.matchedCount > 0) {

                    toast.success(`Admin Make Sussess Full`)
                    refetch()
                }
            })

    }

    // console.log(isAdmin)

    // const makeUser = () => {
    //     const url = `http://localhost:5000/user/user/${user.email}`;

    //     fetch(url, {
    //         method: 'PUT',
    //         authorzation: `Bearer ${localStorage.getItem('accessToken')}`
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             refetch()
    //             toast.success(`USer Make Sussess Full`)
    //         })

    // }


    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{user?.email}</td>
            <td>

                {
                    role !== 'admin' && <button onClick={makeAdmin} class="btn btn-success">Make Admin</button>
                }

            </td>

            <td><button className="btn">X</button></td>


        </tr>
    );
};

export default UserRow;