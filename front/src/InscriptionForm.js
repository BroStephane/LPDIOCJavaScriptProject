import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Signin(props) {
    const [users, setUsers] = useState({name: "", password: "", surname: "", email: ""});
    const navigate = useNavigate();

    function handleTextChange(e, label) {
        setUsers({...users, [label]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/signin", users)).data;
            if (response.token === undefined) {
                alert("échec de connexion");
            } else {
                alert(response.token);
                props.setCookie("td05", {name: users.name, token: response.token}, "/");
            }
            setUsers({name: "", password: "", surname: "", email: ""});
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <Container>
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <h1 className="users-title">Se connecter</h1>
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="usersName">
                            <Form.Label>nom</Form.Label>
                            <Form.Control type="text" placeholder="nom" value={users.name}
                                          onChange={e => handleTextChange(e, "name")}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="usersPassword">
                            <Form.Label>mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="" value={users.password}
                                          onChange={e => handleTextChange(e, "password")}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="usersSurname">
                            <Form.Label>prénom</Form.Label>
                            <Form.Control type="surname" placeholder="" value={users.surname}
                                          onChange={e => handleTextChange(e, "surname")}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="usersEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="" value={users.email}
                                          onChange={e => handleTextChange(e, "email")}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            OK
                        </Button>{"  "}
                        <Button variant="primary" type="button" onClick={() => navigate("/signup")}>
                            Créer un compte
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
}
