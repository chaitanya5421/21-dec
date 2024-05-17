import React from 'react'
import CompA from './CompA'
import CompC from './CompC'

export const context = React.createContext()

const UseContextHook = () => {
  return (
    <center>
      <h2>UseContextHook</h2>
      <context.Provider value="ReactJS">
        <CompC />
      </context.Provider>
    </center>
  )
}

export default UseContextHook
