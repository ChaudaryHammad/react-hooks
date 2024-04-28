import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const [name,setName] = useState('')
  const renderCount = useRef(0)
    useEffect(()=>{
        renderCount.current = renderCount.current + 1
        
    
    })



  return (
  <>
      <div>UseRef Hook</div>

<input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="" id="" />
<h1>{name}</h1>

<h1>Number of times i render {renderCount.current}</h1>
  </>
  )
}

export default UseRef