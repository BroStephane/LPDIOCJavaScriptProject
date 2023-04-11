import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Accueil from "./pages/Acceuil";
import Calendrier from "./pages/calendrier/calendrier";
import CalendarList from "./pages/GererLesRDV/lister_rdv";
import PrendreRdv from "./pages/GererLesRDV/prendreRDV";
import AddEventForm from "./pages/ajouteDisponibilite/ajoutDispo";
import AddServiceType from "./pages/ajoutService/ajoutService";
import ServiceType from "./pages/ajoutService/retournerServices";
import ProfilePage from "./pages/profil/profil";
import ConnexionInscription from "./pages/ConnexionInscription";

function MyNavbar(props) {
    const navigate = useNavigate();

    let name;
    if (props.cookies && props.cookies.td05) {
        name = props.cookies.td05.name;
        console.log('name', name)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/">Acceuil</Link></Navbar.Brand>
                <Nav.Item><Link to="/lister-rdv">Calendrier et les rendez-vous</Link></Nav.Item>
                <Nav.Item><Link to="/ajout-dispo">Ajouter vos disponibilités</Link></Nav.Item>
                <Nav.Item><Link to="/ajout-serice">Ajouter un service</Link></Nav.Item>
                <Nav.Item><Link to="/moi">mon profil</Link></Nav.Item>
                {name === undefined ?
                    <Button variant="outline-success" onClick={() => navigate("/connexioninscription")}>Connexion / Inscription</Button> :
                    <Button variant="outline-danger" onClick={() => props.removeCookie("td05")}>Déconnexion</Button>
                }

            </Container>
        </Navbar>
    );
}

function Footer() {
    return (
        <footer>
            <div className={'left'}>
                <h2>QuoiFeur</h2>
                <p><a href='tel:0321519735'>03 21 51 97 35</a></p>
                <p><a href='mailto:quoi@feur.com'>quoi@feur.com</a></p>
                <p>31 Rue du Collège,</p>
                <p>62000 Arras, France</p>
            </div>
            <div className={'middle'}>
                <h2>Nos réseaux sociaux</h2>
                <p><a href='https://www.facebook.com'>Facebook</a></p>
                <p><a href='https://www.twitter.com'>Twitter</a></p>
                <p><a href='https://www.instagram.com'>Instagram</a></p>
            </div>
            <div className={'right'}>
                <h2>L'entreprise</h2>
                <p><a href="https://www.pole-emploi.fr" target="_blank">On recrute !</a></p>
                <p><a href='https://apps.apple.com/us/app/planity/id1434056190'>Notre appli iOS</a></p>
                <p><a href='https://play.google.com/store/apps/details?id=com.planitypublic&hl=fr&gl=US'>Notre appli Android</a></p>
            </div>
        </footer>
    )
}

export default function App() {
    const [cookies, setCookie, removeCookie] = useCookies(["td05"]);
    return (
        <>
            <MyNavbar cookies={cookies} removeCookie={removeCookie} />
            <Routes>
                <Route exact={true} path="/" element={<Accueil />} />
                <Route exact={true} path="/connexioninscription" element={<ConnexionInscription setCookie={setCookie} />} />

                <Route exact={true} path="/lister-rdv" element={<Calendrier  />} />
                <Route exact={true} path="/lister" element={<CalendarList  />} />
                <Route exact={true} path="/nouveau-rdv" element={<PrendreRdv  />} />
                <Route exact={true} path="/ajout-dispo" element={<AddEventForm  />} />
                <Route exact={true} path="/ajout-serice" element={<AddServiceType  />} />
                <Route exact={true} path="/lister/service" element={<ServiceType  />} />
                <Route exact={true} path="/moi" element={<ProfilePage  />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}