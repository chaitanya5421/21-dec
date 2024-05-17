import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    const data = useRef()

    const handleSubmit = (e) => {
            e.preventDefault()
            console.log(data.current.value)
    }

    useEffect(()=>{
            data.current.focus()
    }, [])

  return (
    <center>
      <h2>UseRefHook</h2>
      {/* 
            - usestate will re-render when the content change and update in ui

            - useref hook doesn't notify you when its content changes. mutating the 
            (.current)  property doesn't cause a re-render
      */}

      <form>
        <input type="text" ref={data} />
        <button className='btn btn-secondary'
        onClick={handleSubmit}
        >Submit</button>
      </form>
    </center>
  )
}

export default UseRefHook
