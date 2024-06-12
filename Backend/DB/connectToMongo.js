import { connect } from "mongoose";

async function connectToMongo(){
    try {
        await connect(process.env.MONGO_URI)
        console.log("Conected")
        return {status:1}
    } catch (error) {
        return {status:0,error}     
    }
}

export default connectToMongo