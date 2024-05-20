import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ArrowLeftCircle, ChevronLeft } from 'react-feather'
import { add } from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {
  const [product, setProduct] = useState({})
  const { myid } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const { data } = await axios(`https://fakestoreapi.com/products/${myid}`)
    setProduct(data)
  }

  
  const handleBack = () => {
    navigate(-1);
  };

  const handleAdd = (product) => {
      dispatch(add(product))
  }

  return (
    <div className='container'>
      <div className='d-flex'>
        <div className="container">
          {Object.keys(product).length > 0 ? (
            <>
              <div className="my-3 d-flex align-items-center">
                <ChevronLeft
                  size={25}
                  onClick={handleBack}
                  className="float-start"
                />
                <h2 className="text-center">Product Details Page</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src={product.image} className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3>{product.category}</h3>
                  <p>{product.description}</p>
                  <button
                    className="btn btn-warning"
                    onClick={() => {handleAdd(product)}}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

            </>
          ) : null}
        </div>
      </div>


    </div>
  )
}

export default Product
