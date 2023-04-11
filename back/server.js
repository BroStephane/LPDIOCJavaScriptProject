const express = require('express');
const routePrestataire  = require("./controller/prestataireController")
const routeUser  = require("./controller/userController")
const cors = require('cors');



const app = express();

const port = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());
app.use (express.urlencoded({extended:true}));
app.use(routePrestataire)
    .use(routeUser);


app.listen (port, ()=> console.log("listening on port"+port));