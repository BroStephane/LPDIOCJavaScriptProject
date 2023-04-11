// import React, { useState } from 'react';
// import FormPrestaInscription from '../components/formPrestaInscription';
// import FormUtilisateurInscription from '../components/formUtilisateurInscription';
// import FormPrestaConnexion from '../components/formPrestaConnexion';
// import FormUtilisateurConnexion from '../components/formUtilisateurConnexion';

// const ConnexionInscription = () => {
//     const [selectedComponent, setSelectedComponent] = useState('');

//     const handleClick = (component) => {
//         setSelectedComponent(component);
//     };

//     return (

//         <div>
//             {selectedComponent === "" && (
//                 <>
//                     <button className="btn btn-primary" type="button" onClick={() => handleClick("formPrestaInscription")}>Créer un compte professionnelle</button>
//                     <button className="btn btn-primary" type="button" onClick={() => handleClick("formUtilisateurInscription")}>Créer un compte client</button>
//                     <button className="btn btn-primary" type="button" onClick={() => handleClick("formPrestaConnexion")}>Connexion Préstataire</button>
//                     <button className="btn btn-primary" type="button" onClick={() => handleClick("formUtilisateurConnexion")}>Connexion Utilisateur</button>
//                 </>
//             )}
//             {selectedComponent === "formPrestaInscription" ? <FormPrestaInscription /> : null}
//             {selectedComponent === "formUtilisateurInscription" ? <FormUtilisateurInscription /> : null}
//             {selectedComponent === "formPrestaConnexion" ? <FormPrestaConnexion /> : null}
//             {selectedComponent === "formUtilisateurConnexion" ? <FormUtilisateurConnexion /> : null}
//         </div>

//     );
// };

// export default ConnexionInscription;

import React, { useState } from 'react';
import FormPrestaInscription from '../components/formPrestaInscription';
import FormUtilisateurInscription from '../components/formUtilisateurInscription';
import FormPrestaConnexion from '../components/formPrestaConnexion';
import FormUtilisateurConnexion from '../components/formUtilisateurConnexion';

const ConnexionInscription = () => {
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-8 col-sm-6 col-md-4">
                    {selectedComponent === "" && (
                        <>
                            <button className="btn btn-primary w-100 mb-3" type="button" onClick={() => handleClick("formPrestaInscription")}>Créer un compte préstataire</button>
                            <button className="btn btn-primary w-100 mb-3" type="button" onClick={() => handleClick("formUtilisateurInscription")}>Créer un compte client</button>
                            <button className="btn btn-primary w-100 mb-3" type="button" onClick={() => handleClick("formPrestaConnexion")}>Se connecter en tant que prestataire</button>
                            <button className="btn btn-primary w-100 mb-3" type="button" onClick={() => handleClick("formUtilisateurConnexion")}>Se connecter en tant que client</button>
                        </>
                    )}
                </div>
            </div>

            {selectedComponent === "formPrestaInscription" ? <FormPrestaInscription /> : null}
            {selectedComponent === "formUtilisateurInscription" ? <FormUtilisateurInscription /> : null}
            {selectedComponent === "formPrestaConnexion" ? <FormPrestaConnexion /> : null}
            {selectedComponent === "formUtilisateurConnexion" ? <FormUtilisateurConnexion /> : null}
        </div>
    );
};

export default ConnexionInscription;
