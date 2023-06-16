import Controller from "../controller/userController";
import { Router } from "express";
import validate from "../validate/userValidate";


const router = Router();

router.post('/user', validate, Controller.create)
router.get('/user', Controller.listAll)
router.get('/user/:id', Controller.search)
router.put('/user/:id', Controller.update)
router.delete('/user/:id', Controller.delete);

export default router;
