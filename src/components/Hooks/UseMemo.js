import React, { useState } from 'react'

function UseMemo() {
    const [dark,setDark] = useState('dark')

   const themeStyle={
    backgroundColor:dark ? "white":"black",
    color:dark ? "black":"white"
   }
  return (
    <div style={themeStyle} >
        <section id='sec' className='h-[50vh] flex items-center justify-center flex-col ml-10 mr-10 p-2 '>

            <button className='bg-gray-300 p-1 border-gray-400 rounded' onClick={()=>setDark(prev => !prev)}>Toggle Theme</button>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi maiores dolore perspiciatis quo magni reprehenderit cumque! Aperiam, architecto incidunt ullam maiores harum nihil, temporibus exercitationem nisi eligendi sed vero accusamus excepturi aliquam repellat pariatur, voluptas dolorum a reprehenderit rerum provident! Perspiciatis voluptas laboriosam, repellat ipsam iure vero voluptates. Accusamus, quos.</p>
        </section>
    </div>
  )
}

export default UseMemo