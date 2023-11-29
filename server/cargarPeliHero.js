require('dotenv').config()

const connectDB = require('./db/connect')
const PeliHero = require('./models/PeliHero')
const peliHeroJson = require('../peliHero.json')

const iniciar = async () => {
    try{
        await connectDB(process.env.DB_URL)
        await PeliHero.create(peliHeroJson)
        console.log('Se agrego el json a la DB')
    } catch (e){
        console.log('Error al agregar el .json', e)
    }

}

iniciar()


