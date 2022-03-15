import express from "express";
import authMiddleware from "../auth/auth.middleware";
import userController from "./user.controller";
const router = express.Router();

router.get("/", authMiddleware.authenticateUser, userController.find);
router.get("/me", authMiddleware.authenticateUser, userController.me);

// POST Register user
// POST Login
// POST Save data user
// GET profile

export default router;
