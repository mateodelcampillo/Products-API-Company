import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { isAdmin, isModerator, verifyToken } from "../middlewares";
import { checkRolesExisted } from "../middlewares/verifySignup";
const router = Router()

router.post("/",[verifyToken,isAdmin, checkRolesExisted], createUser)

export default router