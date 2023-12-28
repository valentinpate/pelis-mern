const User = require('../models/User')


const add_to_my_list = async (req,res) => {
    try {
        const { id , profId, movie } = req.body
        const user = await User.findById(id)
        await user.addToMyList(id, profId, movie)
        res.json({message:"Agregado a My List"})
    } catch (e){
        console.log('error al add-to-my-list',e)
    }
}

const get_my_list = async (req,res) => {
    const {id, profId} = req.body
    const user = await User.findById(id)
    const index = user.profiles.findIndex(prof => prof._id == profId)
    const list = user.profiles[index].myList
    res.json({list:list})
}

module.exports={add_to_my_list, get_my_list}