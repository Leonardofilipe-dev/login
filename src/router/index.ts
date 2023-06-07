import express, { Router } from "express";
import userRouter from "./userRouter";


const router = Router();
    
router.use(express.json());
router.use(userRouter);

export default router;



