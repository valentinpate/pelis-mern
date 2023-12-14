const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true  // permite documentos sin el campo googleId
      },
    profiles:[{
        _id:false,
        image:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true
        },
        myList:[]
    }]
})

userSchema.pre("save", async function(next){   //Agregue este para encriptar las contraseñas
    const salt= await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password,salt)
    next()
})

userSchema.post("save",function(doc,next){ //este no esta haciendo nada pero por ahi nos sirve
    next()
})

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw new Error(err);
    }
  };

userSchema.methods.crearPerfil = async function(name,image) {
    try{
    const newUser = name
    const blankUser = image
    await newUser.save()  // Crear y guardar el nuevo usuario en la base de datos
    await User.updateOne({_id:newUser._id},{$push:{profiles:{image:blankUser,name:newUser,myList:[]}}})
    console.log("creado con exito")
  } catch (error) {
    console.log(error)
  }
  };

  
const User = mongoose.model('User', userSchema);

module.exports = User;