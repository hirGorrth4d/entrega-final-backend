import Product from '../models/Product'

export const createProduct = async (req,res) => {
    const {name, category, price, imgUrl} = req.body
    const newProduct = new Product({name, category, price, imgUrl})
    const productSaved = await newProduct.save()
    res.status(201).json({
        msg: "producto creado",
        data: productSaved
    })
}
export const getProductById = async(req,res) => {
    const product = await Product.findById(req.params.productId)
    res.status(200).json({
        product
    })
}
export const getAllProducts = async (req,res) => {
    const products = await Product.find()
    res.status(200).json({
        msg: "todos los productos",

        data: products
    })

}
export const updateProduct = async(req,res) => {
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json({
        msg: "producto actualizado",

        data: product
    })
}
export const deleteProduct = async (req,res) => {
    const product = await Product.findByIdAndDelete(req.params.productId)
    res.status(200).json({
        msg: "producto borrado",
        data: product
    })
}