import React, { createContext, useState } from 'react';

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    let copyCart = [...carrito];

    // Función agregar al carrito
    function addToCart(Data, clicks) {
        if (isInCart(Data.id)) {
            const itemList = findItem(Data.id)
            copyCart[itemList].clicks += clicks;
            setCarrito(copyCart)
        }
        else {
            copyCart.push({ ...Data, clicks });
            Data.stock -= clicks
            setCarrito(copyCart)
            console.log(copyCart)
        }
    }

    // Función remover item
    function removeItem(Data) {
        const itemRemove = findItem(Data.id)
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCarrito(copyCart)
        console.log(copyCart)
    }

    // Función vaciar carrito
    function removeAll() {
        copyCart = []
        setCarrito(copyCart)
        console.log(copyCart)
    }

    // Función existe el item en el carrito?
    function isInCart(id) {
        return (copyCart.some(itemInCart => itemInCart.id === id))
    }

    // Función búsqueda de un item por id
    function findItem(id) {
        return (copyCart.findIndex(item => item.id === id))
    }

    // Función total productos
    function totalAmount() {
        let amountCart = 0;
        copyCart.map(index => amountCart += index.clicks);
        return amountCart;
    }

    // Función precio total productos
    function totalPrice() {
        let total = 0;
        copyCart.map((index) => total += index.price * index.clicks);
        return total;
    }

    // Función auxiliar
    function plusItemsCart(id) {
        if (copyCart[id].stock !== 0) {
            copyCart[id].clicks += 1
            copyCart[id].stock -= 1
            setCarrito(copyCart)
        }
    }
    function subItemsCart(id) {
        if (copyCart[id].clicks !== 1) {
            copyCart[id].clicks -= 1
            copyCart[id].stock += 1
            setCarrito(copyCart)
        }
    }

    return (
        <CartContext.Provider
            value={{
                carrito,
                addToCart,
                removeItem,
                removeAll,
                totalAmount,
                totalPrice,
                plusItemsCart,
                subItemsCart
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;