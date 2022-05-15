import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading/Loading'
import UserRow from './UserRow';

const AllUsers = () => {
    const url = `http://localhost:5000/users`
    const { data: users, isLoading } = useQuery('allUsers', () =>
        fetch(url).then(res => res.json()))

    if (isLoading) {

        return <Loading></Loading>
    }

    console.log(users)


    return (
        <div>

            <h2>All Users {users.length}</h2>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <UserRow
                                user={user}
                                index={index}></UserRow>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllUsers;