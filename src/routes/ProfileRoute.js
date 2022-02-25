import express from "express";
import User from "../controllers/ProfileController";
import VerifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.post("/profile", VerifyToken.checkAuthenticated, User.updateProfile);
router.get("/profile", VerifyToken.checkAuthenticated, User.getProfile);
router.get("/testing", (req, res) => {
  res.json({ message: "Hello World" });
});

export default router;
