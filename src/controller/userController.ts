import { Request, Response } from 'express';
import User from '../model/userModels';

class userController{
    async create(req: Request, res: Response){
        try {
            const {name, email, password} = req.body;
            const user = new User({
                name,
                email,
                password
            })

            await user.save()
            res.status(201).json(user)
        } catch (error) {
            res.status(500).send(error);
        }
        
    }

    async listAll(req: Request, res: Response){
        try {
            const user = await User.find();
            res.json(user)
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async search(req:Request, res: Response){
        try {
            const userId: string = req.params.id;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).send('User not found!');
              }
              res.json(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response){
        try {
            const userId: string = req.params.id;
            const { name, email, password }: { name: string, email: string, password: string } = req.body;
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { name, email, password },
                { new: true }
              );
              if (!updatedUser) {
                return res.status(404).send('User not found!');
              }
              res.json(updatedUser);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async delete(req: Request, res: Response){
        try {
            const userId: string = req.params.id;
            const deletedUser = await User.findByIdAndDelete(userId);
            if (!deletedUser) {
                return res.status(404).send('User not found!');
              }
              res.sendStatus(204);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new userController()