import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";


export default function Signup() {

    // $mail :req.body.mail,
    // $mots_de_pass :hash,
    // $nom :req.body.nom,
    // $ville :req.body.ville,
    // $code_postal :req.body.code_postal,
    // $description :req.body.description,
    // $mot_cles :req.body.mot_cles,
    // $photo: req.body.photo

    const [prestataire, setPrestataire] = useState({ mail: "", mot_de_passe: "", nom: "", ville: "", code_postal: "", description: "", mot_cles: "", photo: "" });

    function handleTextChange(e, label) {
        setPrestataire({ ...prestataire, [label]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/prestataire-signup", prestataire)).data;
            if (response.id === undefined) {
                alert("échec de connexion");
            } else {
                alert(response.id);
                // props.setCookie("td05", {name: person.name, token: response.token}, "/");
            }
            setPrestataire({ mail: "", mot_de_passe: "", nom: "", ville: "", code_postal: "", description: "", mot_cles: "", photo: "" })
        } catch (e) {
            console.error("ERR", e);
        }
    }
    return (
        <Container>
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <h1 className="person-title">Créer un compte professionnelle</h1>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="mail">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control type="text" placeholder="Mail" value={prestataire.mail}
                                onChange={e => handleTextChange(e, "mail")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mot_de_passe">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Mot de passe" value={prestataire.mot_de_passe}
                                onChange={e => handleTextChange(e, "mot_de_passe")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" value={prestataire.nom}
                                onChange={e => handleTextChange(e, "nom")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="ville">
                            <Form.Label>Ville</Form.Label>
                            <Form.Control type="text" placeholder="Ville" value={prestataire.ville}
                                onChange={e => handleTextChange(e, "ville")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="code_postal">
                            <Form.Label>Code postal</Form.Label>
                            <Form.Control type="number" placeholder="Code postal" value={prestataire.code_postal}
                                onChange={e => handleTextChange(e, "code_postal")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mot_cles">
                            <Form.Label>Mot cles</Form.Label>
                            <Form.Control type="text" placeholder="Mot cles" value={prestataire.mot_cles}
                                onChange={e => handleTextChange(e, "mot_cles")} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="photo">
                            <Form.Label>Lien photo</Form.Label>
                            <Form.Control type="text" placeholder="Lien photo" value={prestataire.photo}
                                onChange={e => handleTextChange(e, "photo")} />
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
