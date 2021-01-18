import React from "react"
import productsData from './productsData'

function Products() {    
    const product = productsData.map(item => (
        <div>
            <h3 key={item.id}>{item.name} - ${item.price}</h3>
            <p id='descrip'>{item.description}</p>
            <hr />
        </div>
    ))
    
    return (
        <div className='profile'>
            <h1>Products Page</h1>
            <hr />
            {product}
        </div>
    )
}

export default Products