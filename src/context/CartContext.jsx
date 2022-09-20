import React, { createContext, useState } from 'react';

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    let copyCart = [...carrito];


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
        }
    }


    function removeItem(Data) {
        const itemRemove = findItem(Data.id)
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCarrito(copyCart)
    }


    function removeAll() {
        copyCart = []
        setCarrito(copyCart)
    }


    function isInCart(id) {
        return (copyCart.some(itemInCart => itemInCart.id === id))
    }


    function findItem(id) {
        return (copyCart.findIndex(item => item.id === id))
    }


    function totalAmount() {
        let amountCart = 0;
        copyCart.map(index => amountCart += index.clicks);
        return amountCart;
    }


    function totalPrice() {
        let total = 0;
        copyCart.map((index) => total += index.price * index.clicks);
        return total;
    }


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
    function clearCart() {
        copyCart = []
        setCarrito(copyCart)
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
                subItemsCart,
                clearCart
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;