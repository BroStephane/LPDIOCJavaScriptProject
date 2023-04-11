import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin(props) {

    const [user, setUser] = useState({ mail: "", mot_de_passe: "" });

    function handleTextChange(e, label) {
        setUser({ ...user, [label]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/user-signin", user)).data;
            if (response.token === undefined) {
                alert("échec de connexion");
            } else {
                alert(response.token);
                props.setCookie("td05", { name: user.mail, token: response.token }, "/");
            }
            setUser({ mail: "", mot_de_passe: "" });
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <Container>
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <h1 className="person-title">Se connecter</h1>
                    <Form onSubmit={handleSubmit}>
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
                            Se connecter
                        </Button>{"  "}
                    </Form>
                </div>
            </div>
        </Container>
    );
}