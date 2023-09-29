import React from 'react'
import './Searchbar.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
    return (
        <div className="searchbar">
            <div className="search-container">
                <input
                /* value={stringSearch} onChange={(e) => setStringSearch(e.target.value) } */
                    type="text"
                    className="searchTerm"
                    placeholder="What are you looking for?"
                />
                <AiOutlineSearch className="searchIcon" />
            </div>
        </div>
    )
}

export default Searchbar

/* fetch hacia lista de productos. Primero crear estado que represente valor del input const [stringSearch, setStringSearch] = useState('') */

/* const [productsSearch, setProductsSearch] = useState([]) */
/* useEffect(() =>{
    fetch('../../products.json').then(res => res.json())
    .then(data => {
        setProductsSearch(data.filter(product => 
            product.name.includes(stringSearch) && stringSearch != ''
        ))
    })
},[stringSearch]) */

/* console.log(productsSearch) */