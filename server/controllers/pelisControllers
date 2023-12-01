const Hero = require('../models/PeliHero')

const Hero_get = async (req,res) => {

    const arraySlide = await Hero.find({})

    res.json({arraySlide})

    console.log('arraySlide',arraySlide)
  }
  
module.exports = { Hero_get }
