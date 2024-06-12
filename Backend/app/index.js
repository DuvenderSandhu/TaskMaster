import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log("Website running at PORT ",process.env.PORT)
})