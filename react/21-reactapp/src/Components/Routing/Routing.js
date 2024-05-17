import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Counter from '../Counter'
import MountingComp from '../MountingComp'
import Home from '../Home'
import NotFound from '../NotFound'
import ContactUs from '../ContactUs'
import Pagination from '../Pagination'
import UnmountingTime from '../UnmountingTime'
import UseStateCounter from '../hooks/UseStateCounter'
import UseeffectPagination from '../hooks/UseeffectPagination'
import UseContextHook from '../hooks/UseContextHook'
import UseRefHook from '../hooks/UseRefHook'

const Routing = () => {
  return (  
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} /> 
        <Route path='/mountingcomp' element={<MountingComp />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/unmounting' element={<UnmountingTime />} />
        <Route path='/usestatecounter' element={<UseStateCounter />} />
        <Route path='/useeffecthook' element={<UseeffectPagination />} />
        <Route path='/usecontext' element={<UseContextHook />} />
        <Route path='/useref' element={<UseRefHook />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing