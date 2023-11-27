const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

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