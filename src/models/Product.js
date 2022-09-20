import {Schema, model} from "mongoose"

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String
},{
    timeStamps: true,
    versionKey: false
})

export default model("Product", productSchema)