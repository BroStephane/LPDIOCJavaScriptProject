import React from "react";
import illustration from "../images/illustration.jpg";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <img className={'illustration'} src={illustration} alt={'test'} />
            <p className={'homePageText'}>
                Réservez votre prochain rendez-vous chez le coiffeur en ligne ! Notre site vous permet de trouver rapidement et
                facilement un salon de coiffure près de chez vous et de réserver votre rendez-vous en quelques clics seulement.
                Nous avons une large sélection de salons de coiffure pour tous les goûts et tous les budgets, et notre système
                de réservation en ligne est simple et facile à utiliser. Vous pouvez réserver votre rendez-vous à tout moment,
                24 heures sur 24 et 7 jours sur 7. Alors pourquoi attendre ? Réservez dès maintenant votre prochain rendez-vous
                chez le coiffeur en ligne !
            </p>
            <div className={'button'}><button><Link to="/nouveau-rdv">RÉSERVER MAINTENANT</Link></button></div>
        </>

    );
}