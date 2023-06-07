import { Request, Response } from 'express';
import User from '../model/userModels';

class userController{
    async create(req: Request, res: Response){
        try {
            res.send('Hello, word')
        } catch (error) {
            
        }
        
    }

    async listAll(req: Request, res: Response){
        try {
            res.send('Hello, word')
        } catch (error) {
            
        }
    }

    async search(req:Request, res: Response){
        try {
            res.send('Hello, word')
        } catch (error) {
            
        }
    }

    async update(req: Request, res: Response){
        try {
            res.send('Hello, word')
        } catch (error) {
            
        }
    }
    async delete(req: Request, res: Response){
        try {
            res.send('Hello, word')
        } catch (error) {
            
        }
    }
}

export default new userController()