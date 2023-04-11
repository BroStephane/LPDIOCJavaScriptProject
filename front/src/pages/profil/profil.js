import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import axios from 'axios';
function ProfilePage() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/moi')
            .then(response => {
                setProfile(response.data[0]);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Container>
            <Row>
                <Col md={3} className="text-center">
                    <Image src={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"} alt="Profile" thumbnail fluid />
                    <h4>{profile.nom}</h4>
                    <p>{profile.ville}</p>
                    <Button variant="primary" >Modifier le profil</Button>
                </Col>
                <Col md={9}>
                    <Card>
                        <Card.Body>
                            <h5>À propos de moi</h5>
                            <p>{profile.description}</p>
                            <hr />
                            <h5>Mes informations de contact</h5>
                            <p>Email: {profile.mail}</p>
                            <hr />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfilePage;
