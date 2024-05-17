import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getproductsData()
  }, [])

  const getproductsData = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }

  return (
    <>
      <h2>Products</h2>
      <div className="container">
        <div className="row">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div className="col-xl-3 mt-4">
                <div className='card'>
                  <Link to={`/product/${product.id}`}>
                    <img className="img-fluid" src={product.image} style={{ height: "250px", width: "200px" }} /> <br />
                    <h5>{product.title}</h5>
                    <h6>Rs. {product.price}</h6>
                    <h6>{product.rating.rate} | {product.rating.count}</h6>
                    </Link>
                </div>
              </div>
            ))
          ) : (<img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />)}
        </div>
      </div>
    </>
  )
}

export default Products
