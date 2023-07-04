import { Request, Response } from "express";

import UserService from "../services/user.aservices";

const userService = new UserService();

export async function getUsersById(req: Request, res: Response) {
    const id: string = req.params.id
    
    try {
      const result = await userService.selectUserById(id)
      console.log(result)
      res.status(200).send(result);
    } catch (err) {
      console.log (err)
      res.status(500).send('Erro ao obter usuario');
    }
  }

  export async function getAllUsers(req: Request, res: Response) {
   
    try {
      const result = userService.selectAllUsers
  
      res.status(200).json(result);
    } catch (err) {
      console.log(err)
      res.status(500).send('Erro ao obter usuario');
    }
  }

  export async function insertUsers(req: Request, res: Response){
   
    try {
      const result = await userService.insertUsers(req.body.username, req.body.password, req.body.email)
      console.log(result)
      res.status(200).send(result);
    } catch (err) {
      console.log (err)
      res.status(500).send('Erro ao obter usuario');
    }

  }