import Product from "../models/Product"

export const createProduct = async(req,res)=>{
    const {name, description, price, imgURL} = req.body

    const newProduct = new Product({name, description, price, imgURL})

    const productSave = await newProduct.save()

    res.status(201).json(productSave)
}

export const getProducts = async(req,res)=>{
const products= await Product.find();

res.json(products)
}

export const getProductById = async (req,res)=>{

try {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
} catch (error) {
    res.status(404).json("No existe")
}

}

export const updateProductBy = async(req,res)=>{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body,{
        new: true
    })
    res.status(200).json(updatedProduct)
}

export const deleteProductById = async(req,res)=>{
const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
res.status(204).json()
}
