import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function AddCalendar() {
    const [jourOuverture, setJourOuverture] = useState('');
    const [jourFermeture, setJourFermeture] = useState('');
    const [heureOuverture, setHeureOuverture] = useState('');
    const [heureFermeture, setHeureFermeture] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/add-calendar', {
                jour_ouverture: new Date(jourOuverture).toISOString(),
                jour_fermeture: new Date(jourFermeture).toISOString(),
                heure_ouverture: heureOuverture,
                heure_fermeture: heureFermeture,
            })
            .then(() => {
                alert('Calendrier mis à jour avec succès!');
                setJourOuverture('');
                setJourFermeture('');
                setHeureOuverture('');
                setHeureFermeture('');
            })
            .catch((error) => {
                console.error(error);
                alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            });
    };

    return (
        <div>
            <h2>Ajouter un Service au calendrier</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Jour d'ouverture :</Form.Label>
                    <Form.Control type="datetime-local" value={jourOuverture} onChange={(e) => setJourOuverture(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Jour de fermeture :</Form.Label>
                    <Form.Control type="datetime-local" value={jourFermeture} onChange={(e) => setJourFermeture(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Heure d'ouverture :</Form.Label>
                    <Form.Control type="time" value={heureOuverture} onChange={(e) => setHeureOuverture(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Heure de fermeture :</Form.Label>
                    <Form.Control type="time" value={heureFermeture} onChange={(e) => setHeureFermeture(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Ajouter
                </Button>
            </Form>
        </div>
    );
}

export default AddCalendar;
