import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

export default function Signup() {

    // $nom: req.body.nom,
    // $prenom : req.body.prenom,
    // $mail : req.body.mail,
    // $mot_de_passe: hash

    const [user, setUser] = useState({ nom: "", prenom: "", mail: "", mot_de_passe: "" })

    function handleTextChange(e, label) {
        setUser({ ...user, [label]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/signup-user", user)).data;
            if (response.id === undefined) {
                alert("échec de connexion");
            } else {
                alert(response.id);
                // props.setCookie("td05", {name: person.name, token: response.token}, "/");
            }
            setUser({ nom: "", prenom: "", mail: "", mot_de_passe: "" })
        } catch (e) {
            console.error("ERR", e);
        }
    }
    return (
        <Container>
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <h1 className="person-title">Créer un compte utilisateur</h1>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="nom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" value={user.nom}
                                onChange={e => handleTextChange(e, "nom")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="prenom">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Prénom" value={user.prenom}
                                onChange={e => handleTextChange(e, "prenom")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mail">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control type="text" placeholder="Mail" value={user.mail}
                                onChange={e => handleTextChange(e, "mail")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mot_de_passe">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Mot de passe" value={user.mot_de_passe}
                                onChange={e => handleTextChange(e, "mot_de_passe")} required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Créer le compte utilisateur
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    )
}