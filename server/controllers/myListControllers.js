const User = require('../models/User')


const add_to_my_list = async (req,res) => {
    try {
        const { id , movie } = req.body
        const user = await User.findById(id)
        await user.addToMyList(id,movie)
        res.json({message:"Agregado a My List"})
    } catch (e){
        console.log('error al add-to-my-list',e)
    }
}

module.exports={add_to_my_list}