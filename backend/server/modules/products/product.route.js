import express from 'express';
import authMiddleware from '../auth/auth.middleware';
import productController from './product.controller';
const router = express.Router()

router.post('/', authMiddleware.authenticateUser, productController.create);
router.get('/', authMiddleware.authenticateUser, productController.getAll);
router.put('/:id', authMiddleware.authenticateUser, productController.update);
router.delete('/:id', authMiddleware.authenticateUser, productController.delete);

export default router;