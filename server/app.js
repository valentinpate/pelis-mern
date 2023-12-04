const express = require('express')
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const pelisRoutes = require('./routes/pelisRoutes')
const cors = require('cors')
const expressSession = require('express-session')
const passport = require('passport')
const LocalStrategy = require ('passport-local').Strategy
const flash = require('connect-flash')

const app = express()

// Configuracion de la session
const SECRETSESSION = process.env.SECRETSESSION
app.use(expressSession({
    secret : SECRETSESSION,
    resave : false ,
    saveUninitialized : false,
    cookie: { maxAge: 60 * 60 * 1000 } // mantiene al usuario logeado por 1 hora
}))

app.use(express.static(path.join(__dirname, '../client/pelis-mern/public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors()) // para conectar FRONT y BACK (diferentes puertos)

// Configuracion passport
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')
app.use(flash())

const connectDB = require('./db/connect')
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

const connectDataBase = async () => {
    try{
        await connectDB(DB_URL)
        console.log ('Conexion exitosa a la base de datos')
        app.listen(PORT,console.log('servidor ejecutandose'))
    }
    catch(err){
        console.log('Error en la conexion a la base de datos', err)
    }
}

connectDataBase()

// BACK como API para enviar informacion al FRONT
const PeliHero = require('./models/PeliHero')

app.get('/api/pelihero', (req,res) => {
    PeliHero.find()
    .then(allPeliHero => res.json(allPeliHero))
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/pelis-mern/public', 'index.html'));
//   });

app.use(userRoutes,pelisRoutes)