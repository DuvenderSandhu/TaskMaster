import express from 'express'
import userRouter from '../Routers/userRouter.js'
import 'dotenv/config'
const app = express()
app.use('api/user/',userRouter)
export default app 
