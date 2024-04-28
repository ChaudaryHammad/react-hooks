import React from 'react'
import UseRef from '../components/Hooks/UseRef'
import UseMemo from '../components/Hooks/UseMemo'

const Hooks = () => {
  return (
    <div >
    <h1>UseRef Hook</h1>
        <UseRef/>
        <hr />
        <h1>Use Memo Hook</h1>
     <UseMemo/>
    </div>
  )
}

export default Hooks