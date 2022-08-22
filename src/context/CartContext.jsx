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
            console(copyCart)
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

    // Función búsqueda de in item por id
    function findItem(id) {
        return (copyCart.find(item => item.id === id))
    }

    return (
        <CartContext.Provider
            value={{
                carrito,
                addToCart,
                removeItem,
                removeAll
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;