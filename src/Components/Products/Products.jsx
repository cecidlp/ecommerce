import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Products.css'

/* UseEffect es un hook que se encarga de controlar las recargas de funcionalidad */
/* UseState controla recargas de componentes */

function Products({ category, windowWidth }) {

    const [products, setProducts] = useState([]) /* setProducts = recarga componente */
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
           fetch('../products.json')
           .then((res)=> res.json())
           .then(data => {
            setProducts(data)
            setLoading(false)
        }) 
        }, 1000)        
    }, [])
    

    const maxProductsToShow = windowWidth < 850 ? 4 : products.length;
    const filteredProducts = products.filter(product => product.category === category).slice(0, maxProductsToShow)

    return (
        <div className='category-products'>
            {
            loading ? <p>Loading...</p> :
            filteredProducts.map(product => (
                <div key={product.id} className='product-card'>
                    <img src={product.img} alt={product.name} className='product-img' />
                    <h3 className='product-name'>{product.name}</h3>
                    <p className='product-price'>${product.price},00 </p>
                    <Link to={"/details/" + product.id}>See product</Link>
                </div>
    ))
}
        </div >
    )
}

export default Products