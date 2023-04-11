const express = require("express");
const Sqlite3 = require("sqlite3").verbose();
const routes = express.Router();
const jwt = require ('jsonwebtoken');
const bcrypt = require ( 'bcrypt') ;
const auth = require ( "../auth/authUsers" ) () ;
const db = require ( "../data/coiffeur" ) ;
const cfg = require ( "../auth/config" ) ;
const saltRounds = 10;

module.exports = routes;


routes.get('/', auth.authenticate(), (req, res) => {
    res.json("success")
})
routes.post ("/prestataire-signup",( req, res ) => {
    bcrypt.hash ( req.body.pass ,saltRounds, ( err,hash ) => {
        db.get( "insert into Service_provider (mail,mots_de_passe, nom, ville, code_postal, description, mot_cles, photo) values($mail, $mots_de_pass, $nom, $ville, $code_postal,$description, $mot_cles, $photo ) returning id_service_provider",
            {
                $mail :req.body.mail,
                $mots_de_pass :hash,
                $nom :req.body.nom,
                $ville :req.body.ville,
                $code_postal :req.body.code_postal,
                $description :req.body.description,
                $mot_cles :req.body.mot_cles,
                $photo: req.body.photo
            },
            (err, row) => {
                if (err) {
                    return res.json (err).status(401);
                }
                return res.json({ id : row.id_service_provider}).status(201);
            });
    })
})

routes.post ( "/prestataire-signin", (req,res) => {
    db.get( 'SELECT * FROM Service_provider WHERE mail = $name' ,{ $name : req.body.mail },
        async ( err , row ) => {
            if (err) {
                return res.json (err).status(500) ;
            }
            if (!row) {
                return res.json( "bad user");
            }
            const match = await bcrypt.compare ( req.body.pass
                ,row.mots_de_passe) ;
            if (match) {
                const token = jwt.sign ({ id : row.id_service_provider } , cfg.jwtSecret,{expiresIn: "1h"}) ;
                return res.json ({token:token}) ;
            }
            res.json ( "bad password" ).status (401) ;
        })
})


routes.get('/lister-rdv', (req, res) =>{
    db.all("select * from Appointment",
        (err, rows) =>{
            if(err) {
                return res.json(err).status(500);
            }
            return res.json(rows).status(200);
    })
})

routes.get('/lister-rdv-detail', (req, res) =>{
    db.all("SELECT id_rdv, a.id_user, id_service_provider, date_rdv, nom, prenom, mail FROM Appointment a LEFT JOIN Users u ON a.id_user = u.id_user",
        (err, rows) =>{
            if(err) {
                console.log(err);
                return res.json(err).status(500);
            }
            return res.json(rows).status(200);
    })
})

routes.post("/service-type",
    ( req , res ) => {
        db.run ( " insert into Service_type (nom, prix, temps) values ($nom, $prix, $temps)" ,
            {
                $nom :req.body.nom,
                $prix :req.body.prix,
                $temps :req.body.temps
            },
            (err) => {
                if (err) {
                    console.error ("Database error" ,err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    })

routes.get('/service-type',  (req, res) =>{
    db.all("select * from Service_type",
        (err, rows) =>{
            if (err){
                console.error("Error",err);
                res.sendStatus(500);
            }else{
                res.json(rows)
            }
    })
})

routes.post("/add-calendar",
    ( req , res ) => {
        db.run ( "insert into Calendar (jour_ouverture, jour_fermeture, heure_ouverture, heure_fermeture, id_service_provider) values ($jour_ouverture, $jour_fermeture, $heure_ouverture, $heure_fermeture, $id_service_provider)" ,
            {
                $jour_ouverture : req.body.jour_ouverture,
                $jour_fermeture: req.body.jour_fermeture,
                $heure_ouverture: req.body.heure_ouverture,
                $heure_fermeture: req.body.heure_fermeture,
                $id_service_provider: 2
            },
            (err) => {
                if (err) {
                    console.error ("Database error" ,err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    })



routes.get('/moi',  (req, res) =>{
    db.all("SELECT id_service_provider, nom, mail, ville, description, photo FROM Service_provider where id_service_provider=1",
        (err, rows) =>{
            if (err){
                console.error("Error",err);
                res.sendStatus(500);
            } else {
                res.json(rows);
            }
        })
});


routes.get('/prestataire', (req, res) => {
    db.all('SELECT * FROM Service_provider where id_service_provider=1', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Could not retrieve service_providers' });
        }
        return res.status(200).json(rows);
    });
});

// Récupère un service_provider spécifique


