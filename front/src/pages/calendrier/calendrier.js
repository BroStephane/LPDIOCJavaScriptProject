import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Calendrier() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/lister-rdv')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            <div>
                <h2>Vous pouvez egalement: </h2>
                <Link to="/lister">Lister de tous les rendez-vous</Link>
                <br></br>
                <Link to="/lister/service">Lister les Services proposée</Link>
            </div>
            <div>
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    events={appointments.map(appointment => ({
                        title: `Rendez-vous numero:  ${appointment.id_rdv}`,
                        start: new Date(appointment.date_rdv),
                        allDay: false
                    }))}
                />
            </div>
        </Container>
    );
}

export default Calendrier;