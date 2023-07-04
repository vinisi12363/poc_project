import { Router } from "express";
import *  as userController from '../controllers/user.controller'

const userRoute = Router()

userRoute.get('/user/:id', userController.getUsersById)
userRoute.get('/user', userController.getAllUsers)
userRoute.post('/sign-up', userController.insertUsers)

export default userRoute