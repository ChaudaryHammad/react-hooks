import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Contact() {
    const navigation = useNavigate()
  return (
    <>
    <div style={{height:'70vh',backgroundColor:'lightgray'}}>Contact Page Component
    <br />
    <button className='btn' onClick={()=> navigation('/')}>Move /</button>
    </div>
    
    </>
  )
}

export default Contact