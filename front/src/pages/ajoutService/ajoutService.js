import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function AddServiceType() {
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState(0);
    const [temps, setTemps] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/service-type', {
                nom: nom,
                prix: prix,
                temps: temps,
            })
            .then(() => {
                alert('Nouveau type de service ajouté avec succès!');
                setNom('');
                setPrix(0);
                setTemps(0);
            })
            .catch((error) => {
                console.error(error);
                alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            });
    };

    return (
        <div>
            <h2>Ajouter un nouveau type de service</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nom :</Form.Label>
                    <Form.Control
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Prix :</Form.Label>
                    <Form.Control
                        type="number"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Temps :</Form.Label>
                    <Form.Control
                        type="number"
                        value={temps}
                        onChange={(e) => setTemps(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Ajouter
                </Button>
            </Form>
        </div>
    );
}

export default AddServiceType;
