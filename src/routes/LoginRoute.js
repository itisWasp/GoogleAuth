import express from "express";
import Authentication from "../controllers/LoginController";

const router = express.Router();

router.get("/login", Authentication.Login);
router.post("/login", Authentication.SignIn);

export default router;
