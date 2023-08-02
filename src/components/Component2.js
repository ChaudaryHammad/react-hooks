import React,{useContext} from 'react'
import { Context } from '..'
function Component2() {
    const value = useContext(Context)
  return (
    <>
    <div className='font-bold'>Component2</div>
    <p>Passed value by context: {value[3].name}</p>
   
{
    value.map((data)=> {
        return(
            <>
            <ul >
                <li>{data.name}</li>
                <li>{data.age}</li>
                <li>{data.id}</li>
            </ul>
            </>
        )
    })
}
   
    </>
  )
}

export default Component2