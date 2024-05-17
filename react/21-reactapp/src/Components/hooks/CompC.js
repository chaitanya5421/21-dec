import React, { Fragment } from 'react'
import { context } from './UseContextHook'

const CompC = () => {
  return (
    <>
      <h2>CompC</h2>
      <context.Consumer>
                {(newvalue) => newvalue}
      </context.Consumer>
    </>
  )
}

export default CompC
