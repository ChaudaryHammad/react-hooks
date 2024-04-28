import React, { useState } from 'react'

const UseRef = () => {
    const [name,setName] = useState('')
  return (
  <>
      <div>UseRef Hook</div>

<input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="" id="" />
<h1>{name}</h1>
  </>
  )
}

export default UseRef