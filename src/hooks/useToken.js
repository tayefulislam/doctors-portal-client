
import { useEffect, useState } from 'react';

const useToken = (user) => {

    const [token, setToken] = useState('');

    // console.log(user)

    useEffect(() => {

        // console.log('user token', user)
        const email = user?.user?.email;
        const currentUser = { email: email, role: 'user' };

        if (email) {


            // const url = `http://api.priyopathshala.com/user/${email}`;

            const url = `http://localhost:5000/user/${email}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentUser),
            })
                .then(res => res.json())
                .then(data => {
                    console.log('response form server', data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)

                    setToken(data.token)
                })
        }

    }, [user])

    return [token]

}

export default useToken;