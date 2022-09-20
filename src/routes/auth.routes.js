import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from "../middlewares/verifySignup";
const router = Router()

router.post("/signin",  signIn)
router.post("/signup", [checkDuplicateUsernameOrEmail, checkRolesExisted],signUp)

export default router