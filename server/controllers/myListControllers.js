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

const delete_from_my_list = async (req,res) => {
    try {
        const { id , profId, movieId } = req.params
        const user = await User.findById(id)
        await user.deleteFromMyList(id, profId, movieId)
        res.json({message:"Eliminado de My List"})
    } catch (e){
        console.log('error al delete-to-my-list',e)
    }
}

const get_my_list = async (req,res) => {
    const {id} = req.body
    const {profId} = req.params
    const user = await User.findById(id)
    console.log(typeof(id), typeof(profId), typeof(user._id))
    const index = user.profiles.findIndex(prof => prof._id == profId)
    const list = user.profiles[index].myList
    res.json({list:list})
}

module.exports={add_to_my_list, delete_from_my_list, get_my_list}