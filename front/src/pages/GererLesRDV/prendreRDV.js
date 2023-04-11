import React, { useState } from 'react';
import axios from 'axios';
import {Button, Form} from "react-bootstrap";
import ListerCalendar from "./rdv_disponible";

function PrendreRdv() {
    const [idService, setIdService] = useState('');
    const [dateRdv, setDateRdv] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/prendre-rdv', {
            id_service_provider: idService,
            date_rdv: dateRdv
        })
            .then(res => {
                console.log(res);
                alert('Rendez-vous pris avec succès !');
            })
            .catch(err => {
                console.log(err);
                alert('Erreur lors de la prise de rendez-vous.');
            });
    }

    return (
        <div>
            <ListerCalendar/>
            <h2>Prendre rendez-vous</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formService">
                    <Form.Label>Id du service provider :</Form.Label>
                    <Form.Control type="number" value={idService} onChange={(e) => setIdService(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formDate">
                    <Form.Label>Date et heure du rendez-vous :</Form.Label>
                    <Form.Control type="datetime-local" value={dateRdv} onChange={(e) => setDateRdv(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Valider
                </Button>
            </Form>
        </div>
    );
}

export default PrendreRdv;