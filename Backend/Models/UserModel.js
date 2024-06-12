import { model, Schema } from "mongoose";
import bcryptjs from 'bcryptjs'
let userSchema= Schema({
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    }
},{timeStamp:true})
let User = model('User',userSchema)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    try {
      const salt = await bcryptjs.genSalt(10);
      this.password = await bcryptjs.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  });

export default User