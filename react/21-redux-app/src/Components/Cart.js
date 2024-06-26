import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove } from '../Redux/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state => state.cart))
  
  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-8 mx-2'>
          {
            cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div className="card mb-3 shadow">
                  <div className="row g-0">
                    <div className="col-md-4">
                    <Link to={`/product/${item.id}`} className='text-decoration-none'>
                      <div className='d-flex justify-content-center align-items-center py-2'>
                        <img src={item.image} className="img-fluid rounded-start " alt="..." style={{ height: "150px" }} />
                      </div>
                      </Link>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-start">
                        <h5 className="card-title">{item.title} </h5>
                        <p>{item.category}</p>
                        <h5 className='font-weight-bold py-2'>$ {item.price}</h5>
                      </div>
                      <div className='mb-5 text-start d-flex'>
                        <button className='btn btn-warning me-2'>SAVE FOR LATER</button>
                        <button className='btn btn-danger'
                        onClick={()=>{handleRemove(item.id)}}
                        >REMOVE</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (<p>No Items Added into Cart</p>)
          }
          <div className='text-end'>
            <button className='btn btn-primary text-end rounded-0 p-2 px-5 mx-5 my-3 fs-5'>PLACE ORDER</button>

          </div>
        </div>
        <div className='col-3 text-start '>
          <div className='border px-2'>

            <div className='border-bottom'>
              <h5 className='text-secondary text-start py-2 '>PRICE DETAILS</h5>
            </div>
            <div className='py-3'>
              <p>Price:</p>
              <p>Discount:</p>
            </div>

            <div className=' border-top '>
              <h5 className='pt-3'>Total Amount:</h5>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
