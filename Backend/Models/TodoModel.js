import { Model, Schema } from "mongoose";

let todoSchema= Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    completed:{
        type:String,
        default:false
    }
},{timeStamp:true})


let Todo = Model('Todo',todoSchema)
export default Todo