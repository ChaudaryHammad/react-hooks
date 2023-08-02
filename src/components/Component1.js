import React,{useContext} from 'react'
import { Context } from '../index'
import Component2 from './Component2'

function Component1() {
    const data = useContext(Context)
  return (
    <>
    <h1 className='font-bold'>Component1</h1>
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