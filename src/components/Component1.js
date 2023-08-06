import React,{useContext, useEffect, useState} from 'react'
import { Context } from '../index'
import Component2 from './Component2'
import ComputerLanguages from './ComputerLanguages';

function Component1() {
    const data = useContext(Context)
    const [time,setTime] = useState(new Date());
    
    useEffect(() =>{
     const subscribe = setTimeout(() =>{
        setTime(new Date())
       },1000)
      
       return () =>{
       clearTimeout(subscribe)
       }
     
    },[time,setTime])

  return (
    <>
    <h1 className='font-bold'>Component1</h1>
    <h1>{time.toLocaleTimeString()}</h1>
<p>Passed value by context : {data[1].name}</p>

{
    data.map((data)=> {
        return(
            <>
            <ul>
                <li>{data.name}</li>
                <li>{data.age}</li>
            </ul>
            </>
        )
    })
}

<Component2/>
    </>
  )
}

export default Component1