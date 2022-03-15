import express from "express";
import userController from "../controllers/user.controller";
const router = express.Router();

router.get("/", userController.find);

// POST Register user
// POST Login
// POST Save data user
// GET profile

export default router;
