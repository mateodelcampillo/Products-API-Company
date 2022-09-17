import { Router } from "express";
import { getProducts } from "../controllers/products.controller";
const router = Router()

router.post("/", getProducts)

router.get("/", getProducts)

router.get("/:productId", getProducts)

router.put("/:productId", getProducts)

router.delete("/:productId", getProducts)


export default router