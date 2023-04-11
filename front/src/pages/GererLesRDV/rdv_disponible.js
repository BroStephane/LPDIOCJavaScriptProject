import React, { useState, useEffect } from "react";
import axios from "axios";

function ListerCalendar() {
    const [calendars, setCalendars] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/lister-calendar")
            .then((response) => {
                setCalendars(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Liste des prestataires de service disponible</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Jour d'ouverture</th>
                    <th>Jour de fermeture</th>
                    <th>Heure d'ouverture</th>
                    <th>Heure de fermeture</th>
                    <th>ID du prestataire</th>
                    <th>Nom du prestataire</th>
                    <th>Ville</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {calendars.map((calendar) => (
                    <tr key={calendar.id_du_prestataire}>
                        <td>{calendar.jour_ouverture}</td>
                        <td>{calendar.jour_fermeture}</td>
                        <td>{calendar.heure_ouverture}</td>
                        <td>{calendar.heure_fermeture}</td>
                        <td>{calendar.id_du_prestataire}</td>
                        <td>{calendar.nom_du_prestataire}</td>
                        <td>{calendar.ville}</td>
                        <td>{calendar.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListerCalendar;
