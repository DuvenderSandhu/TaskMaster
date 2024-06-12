import { Router } from "express";
import { createUser } from "../Controllers/userControllers.js";

let userRouter= Router()

userRouter.post('/create',createUser)
userRouter.get('/login',createUser)


export default userRouter