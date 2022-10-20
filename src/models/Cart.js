// import {Schema, model} from 'mongoose'

// const cartSchema = new Schema({
//     products: [
//         {
//             product: {
//                 type: Schema.Types.ObjectId, ref: 'Product'
//             },
//             cantidad: Number,
//         }
//     ],
//     activo: {
//         type: Boolean, default: true
//     }
// })

// export default model('Cart', cartSchema)

export const Cart = (carrito) => {
    this.items = carrito.items || {}
    this.cantTotal = carrito.cantTotal || 0
    this.totalPrice = carrito.totalPrice || 0

    this.add = (item, id) => {
        let storedItem = this.items[id]
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, cantidad: 0, price: 0}
        }
        storedItem.cantidad++
        storedItem.price = storedItem.item.price * storedItem.cantidad
        this.cantTotal++
        this.totalPrice += storedItem.item.price
    }

    this.deleteOne = (id) => {
        this.items[id].cantidad--
        this.items[id].price -= this.items[id].item.price
        this.cantTotal--;
        this.totalPrice -= this.items[id].item.price

        if(this.items[id].cantidad <= 0) {
            delete this.items[id]
        }
    }

    this.removeItem = (id) => {
        this.cantTotal -= this.items[id].cantidad
        this.totalPrice -= this.items[id].price;
        delete this.items[id]
    }

    this.cartArray = () => {
        const arr = []
        for (let id in this.items) {
            arr.push(this.items[id])
        }
        return arr
    }
}

