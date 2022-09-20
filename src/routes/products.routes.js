import { Router } from "express";
import { createProduct, deleteProductById, getProductById, getProducts, updateProductBy } from "../controllers/products.controller";
import { isAdmin, isModerator, verifyToken } from "../middlewares";
const router = Router()


router.post("/", [verifyToken, isModerator] , createProduct)

router.get("/", getProducts)

router.get("/:productId", getProductById)

router.put("/:productId",verifyToken, updateProductBy)

router.delete("/:productId",[verifyToken, isModerator], deleteProductById)


export default router