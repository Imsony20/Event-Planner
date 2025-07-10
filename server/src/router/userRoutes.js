import express from 'express';
import { GetProfile } from '../controller/userController.js';
import { Protect } from '../middlewares/authMiddleware.js';


const router = express.Router();


router.get("/profile",Protect, GetProfile);



export default router;