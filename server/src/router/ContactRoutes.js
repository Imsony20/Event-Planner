import express from 'express';
import { Contact } from '../controller/ContactController.js';

const router = express.Router();


router.post('/contact',Contact);

export default router;
