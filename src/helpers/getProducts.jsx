import dataProduct from '../components/Data/Data.jsx';


function getProducts(id) {
    return new Promise((resolve) => {
        let filtroItem = dataProduct.find(elemento => elemento.id === id)
        setTimeout(() => resolve(filtroItem), 2000)
    })
}

export default getProducts;