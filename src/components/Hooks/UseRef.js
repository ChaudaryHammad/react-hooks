import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const [name,setName] = useState('')
    const [image, setImage] = useState([])
   const inputRef = useRef()
   console.log(image);

   const fileRef = useRef(null)


function focus(){
    inputRef.current.focus()
}

  return (
  <>

<input ref={inputRef} type="text" value={name} onChange={(e)=>setName(e.target.value)}  name="" id="" />
<h1>{name}</h1>
<button className='border border-red-600  bg-yellow-600 text-black' onClick={focus}>Focus</button>


<input type="file" 
ref={fileRef}
accept='image/*'

onChange={(e)=>setImage(e.target.files[0])}
hidden

/>

<h1 className='cursor-pointer' onClick={()=> fileRef.current.click()}>Set Image</h1>

<h1>{
    image.length === 0 ? 'No Image' : image.name

}</h1>

  </>
  )
}

export default UseRef