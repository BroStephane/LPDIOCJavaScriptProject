import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CalendarList() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/lister-rdv-detail')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>Liste des rendez-vous</h2>
            <ol>
                    <table className="table table-light">
                        <thead>
                        <tr>
                            <th scope="col">ID RDV</th>
                            <th scope="col">Date de RDV</th>
                            <th scope="col">Nom du client</th>
                            <th scope="col">Prénom du client</th>
                            <th scope="col">Mail du client</th>
                        </tr>
                        </thead>
                        <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id_rdv}>
                                <td>{appointment.id_rdv}</td>
                                <td>{appointment.date_rdv}</td>
                                <td>{appointment.nom}</td>
                                <td>{appointment.prenom}</td>
                                <td>{appointment.mail}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            </ol>
        </div>
    );
}

export default CalendarList;