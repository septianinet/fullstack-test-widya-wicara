import express from 'express';
const router = express.Router();
import * as indexController from '../controllers/index.controller'

router.get('/', indexController.welcome);

export default router;
