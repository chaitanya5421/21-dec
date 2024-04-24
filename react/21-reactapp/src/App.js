import FuncComp from "./FuncComp"
import ClassComp from "./ClassComp"
import './App.css'
import Counter from "./Components/Counter"
import Stylings from "./Components/Stylings/Stylings"
import MountingComp from "./Components/MountingComp"
import Pagination from "./Components/Pagination"
import Navbar from "./Components/Navbar"
import Routing from "./Components/Routing/Routing"

const App = () => {
  // props 
  // it is an object
  // it is to pass data form one component to another component.
  const data = ['peter',25, 'peter@gmail.com']
  return(
    <>
      <Navbar />
      <Routing />

      {/* <FuncComp phoneName="oneplus" data={data} /> */}
      {/* <ClassComp phoneName="iphone" /> */}
      {/* <Counter /> */}
      {/* <Stylings /> */}
      {/* <MountingComp /> */}
      {/* <Pagination /> */}
    </>
  )
}
export default App