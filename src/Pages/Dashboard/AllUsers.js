import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading/Loading'
import UserRow from './UserRow';

const AllUsers = () => {
    const url = `https://doctorapi.priyopathshala.com/users`
    const { data: users, isLoading, refetch } = useQuery('allUsers', () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()))

    if (isLoading) {

        return <Loading></Loading>
    }

    console.log(users)


    return (
        <div>

            <h2>All Users {users?.length}</h2>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) => <UserRow
                                user={user}
                                index={index}
                                refetch={refetch}></UserRow>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllUsers;