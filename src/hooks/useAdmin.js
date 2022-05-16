
import { useState, useEffect } from 'react';
const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    useEffect(() => {


        const url = `http://localhost:5000/admin/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin(data.isAdmin)
            })

    }, [user])
    return [admin]

}

export default useAdmin;