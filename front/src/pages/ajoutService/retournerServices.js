import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table} from "react-bootstrap";

function ServiceType() {
    const [serviceTypes, setServiceTypes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/service-type')
            .then(response => {
                setServiceTypes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Liste des types de services</h1>
            <Table striped bordered hover className="table table-light table-striped table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Temps</th>
                </tr>
                </thead>
                <tbody>
                {serviceTypes.map(serviceType =>
                    <tr key={serviceType.id_service_type}>
                        <td>{serviceType.id_service_type}</td>
                        <td>{serviceType.nom}</td>
                        <td>{serviceType.prix}</td>
                        <td>{serviceType.temps}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default ServiceType;
