import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {ArrowLeftCircle} from 'react-feather'

const Product = () => {
    const [product, setProduct] = useState({})
    const {myid} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const {data} = await axios(`https://fakestoreapi.com/products/${myid}`)
        setProduct(data)
    }

  return (
    <div className='container'>
        <div className='d-flex'>
        <ArrowLeftCircle size="30" onClick={()=>{navigate(-1)}}  />
      <h2>Product</h2>
        </div>
       
      
    </div>
  )
}

export default Product
