import connectToMongo from "../DB/connectToMongo.js";
import User from "../Models/UserModel.js";
import ResponseAPI from "../utils/ResponseAPI.js";

async function createUser(req,res){
    let db= await connectToMongo()
    if(db.status){
        if(req.body.email && req.body.password,req.body.fullName){
            let db= await User.find({email:req.body.email})
            if(db.length){
                res.json(new ResponseAPI(500,"User Already Exists"))
            }
            else{
                const [email,password,fullName]= req.body
                let user= await User.create({email,password,fullName})
                if(user._id){
                    res.json(new ResponseAPI(200,"User Created"))

                }
                else{
                    res.json(new ResponseAPI(500,"Somethign Went Wrong"))
                }

            }
        }
        else{
        res.json(new ResponseAPI(500,"Invalid Input"))
        }
    }
    else{
        res.json(new ResponseAPI(400,"Database Connection Error",{error:db}))
    }
}
function LoginUser(){}


export {
    createUser
}