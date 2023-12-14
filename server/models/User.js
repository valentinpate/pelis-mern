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

userSchema.pre("save", async function(next){  //Agregue este para encriptar las contraseñas
    if (this.skipPreSave) {
        return next(); // No ejecutar el middleware
    }else{
        const salt= await bcrypt.genSalt()
        this.password= await bcrypt.hash(this.password,salt)
        next()
    } 
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
    this.skipPreSave = true;
    let profiles=this.profiles
    try{
    await profiles.push({image:image,name:name,myList:[]})
  } catch (error) {
    console.log(error)
  }
  return this.save()
  };

  
const User = mongoose.model('User', userSchema);

module.exports = User;