const express = require("express");
const Sqlite3 = require("sqlite3").verbose();
const routes = express.Router();
const jwt = require ('jsonwebtoken');
const bcrypt = require ( 'bcrypt') ;
const auth = require ( "../auth/authUsers" ) () ;
const db = require ( "../data/coiffeur" ) ;
const cfg = require ( "../auth/config" ) ;
const {log} = require("util");
const saltRounds = 10;

module.exports = routes;


routes.post ("/signup-user",( req, res ) => {
    bcrypt.hash ( req.body.pass ,saltRounds, ( err,hash ) => {
        db.get( "insert into Users (nom, prenom, mail, mot_de_passe) values($nom, $prenom, $mail, $mot_de_passe ) returning id_user",
            {
                $nom :req.body.nom,
                $prenom :req.body.prenom,
                $mail :req.body.mail,
                $mot_de_passe: hash
            },
            (err, row) => {
                if (err) {
                    return res.json (err).status(401);
                }
                return res.json({ id : row.id_user}).status(201);
            });
    })
})

routes.post ( "/user-signin", (req,res) => {
    db.get( 'SELECT * FROM Users WHERE mail = $name' ,{ $name : req.body.mail },
        async ( err , row ) => {
            if (err) {
                console.log(err) ;
                return res.json (err).status(500) ;
            }
            if (!row) {
                return res.json( "bad user");
            }
            const match = await bcrypt.compare ( req.body.pass
                ,row.mot_de_passe) ;
            if (match) {
                const token = jwt . sign ({ id : row.id_user } , cfg.jwtSecret,{expiresIn: "1h"}) ;
                return res.json ({token:token}) ;
            }
            res.json ( "bad password" ).status (401) ;
        })
})

routes.get('/lister-calendar', (req, res) =>{
    db.all("select * from Calendar",
        (err, rows) =>{
            if (err){
                console.error("Error",err);
                res.sendStatus(500);
            }else{
                res.json(rows)
            }
        })
})

routes.post("/prendre-rdv",
    ( req , res ) => {
        db.run ( " insert into Appointment (id_user,id_service_provider, date_rdv) values ($id_user,$id_service_provider, $date_rdv)" ,
            {
                $id_user: 1,//req.user.id,
                $id_service_provider: req.body.id_service_provider,
                $date_rdv : req.body.date_rdv
            },
            (err) => {
                if (err) {
                    console.error ("Database error" ,err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201) ;
                }
            });
    })

routes.delete("/delete-rdv",
    ( req , res ) => {
        db.all("select * from Appointment where id_user = $id and date_rdv = $date",
            {
                $id:1,
                $date:req.params.date
            },
            (err, rows) =>{
                if (err){
                    console.error("Error",err);
                    res.sendStatus(500);
                }else{
                    res.json(rows)
                }
            })
    })
routes.get('/lister-rdv/:id', (req, res) =>{
    db.all("select * from Appointment where id_user = $id" ,
        {
            $id: req.params.id
        },
        (err, rows) =>{
            if (err){
                console.error("Error",err);
                res.sendStatus(500);
            }else{
                res.json(rows)
            }
        })
})

routes.get('/lister-prestataire',  (req, res) =>{
    db.all("SELECT nom AS provider_name, ville, photo FROM Service_provider",
        (err, rows) =>{
            if (err){
                console.error("Error",err);
                res.sendStatus(500);
            } else {
                res.json(rows);
            }
        })
});


routes.get('/lister-prestataire/search-ville/:ville', auth.authenticate(), (req, res) =>{
    db.all("select c.nom as provider_name, ville, photo, s.nom as type, prix, temps from Service_provider c left join Service_type s on c.id_service_provider=s.id_service_provider where ville = $ville",
        {
            $ville : req.params.ville
        },
        (err, rows) =>{
            if (err){
                console.error("Error",err);
                res.sendStatus(500);
            }else{
                res.json(rows)
            }
        })
})


routes.get('/lister-prestataire/search-name/:nom', auth.authenticate(), (req, res) =>{
    db.all("select c.nom as provider_name, ville, photo, s.nom as type, prix, temps from Service_provider c left join Service_type s on c.id_service_provider=s.id_service_provider where provider_name = $nom",
        {
            $nom : req.params.nom
        },
        (err, rows) =>{
            if (err){
                console.error("Error",err);
                res.sendStatus(500);
            }else{
                res.json(rows)
            }
        })
})

routes.get('/lister-prestataire/search-mot_cles/:mot', auth.authenticate(), (req, res) =>{
    db.all("select c.nom as provider_name, ville, photo, s.nom as type, prix, temps from Service_provider c left join Service_type s on c.id_service_provider=s.id_service_provider where mot_cles = $mot",
        {
            $mot : req.params.mot
        },
        (err, rows) =>{
            if (err){
                console.error("Error",err);
                res.sendStatus(500);
            }else{
                res.json(rows)
            }
        })
})
