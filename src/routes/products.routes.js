import { Router } from "express";
import { createProduct, deleteProductById, getProductById, getProducts, updateProductBy } from "../controllers/products.controller";
import { verifyToken } from "../middlewares";
const router = Router()


router.post("/", verifyToken , createProduct)

router.get("/", getProducts)

router.get("/:productId", getProductById)

router.put("/:productId", updateProductBy)

router.delete("/:productId", deleteProductById)


export default router