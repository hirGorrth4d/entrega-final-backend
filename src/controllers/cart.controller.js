import {Cart} from  '../models/Cart'
import logger from '../service/logger'
import Product from '../models/Product'


export const findAll = async (req,res,next) => {
    try {
        if(!req.session.cart) {
            return res.render('/cart', {products: null})

        }
        const cart = new Cart(req.session.cart)
        return res.render('shop/cart', {products: cart.CartArray(), totalPrice: cart.totalPrice})

    } catch (err) {
        logger.info('hubo un error al encontrar el carrito')
    };
}

export const addToCart = async (req,res) => { //cart/:id
    try {
        const productId = req.params.id
        const cart = new Cart (req.session.cart ? req.session.cart : {})
        Product.findById(productId, (err, product) => {
            if (err) {
                return res.redirect('/')

            }
            cart.add(product, product.id)
            req.session.cart = cart
            console.log(req.session.cart);
            res.redirect('/')
        })
    } catch (err) {
        logger.info('Error', err)
    };
}
export const deleteOne = async (req,res) => {
    try {
        // /cart/:id
        const productId = req.params.id
        const cart = new Cart(req.session.cart ? req.session.cart : {})
        cart.deleteOne(productId)
        req.session.cart = cart
        res.redirect('/cart')
    } catch (err) {
        throw err
    };
}

export const removeItem = async (req,res) => {
    const productId = req.params.id
    const cart = new Cart(req.session.cart ? req.session.cart : {})
    cart.removeItem(productId)
    req.session.cart = cart
    res.redirect('/cart')
}
