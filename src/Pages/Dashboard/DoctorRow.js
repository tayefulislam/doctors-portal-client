import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{doctor?.name}</td>
            <td>{doctor?.speciality}</td>
            {/* <label for="delete-confirm-modal" class="btn modal-button">open modal</label> */}
            <td><button for="delete-confirm-modal" onClick={() => setDeletingDoctor(doctor)} class="btn modal-button">Error</button></td>
        </tr>
    );
};

export default DoctorRow;