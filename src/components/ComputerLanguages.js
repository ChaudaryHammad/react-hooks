import React, { useState } from "react";
import uuid from 'react-uuid';
import useInputHook from "./useInputHook";
function ComputerLanguages() {
    const [name,handleInput,clearName] = useInputHook('')
   const [age,handleInputAge,clearAge] = useInputHook('')

  const [computerLanguages, setComputerLanguages] = useState([
    {
      id: 1,
      name: "c++",
      age: 21,
      level: "parent",
    },
    {
      id: 2,
      name: "c#",
      age: 10,
      level: "parent",
    },
    {
      id: 3,
      name: "swift",
      age: 11,
      level: "child",
    },
    {
      id: 4,
      name: "pythone",
      age: 19,
      level: "parent",
    },
  ]);


  const handleClick=(e)=>{
    e.preventDefault();
    setComputerLanguages([...computerLanguages,{id:uuid(),name:name,age:age,level:'high'}])
    clearName('')
    clearAge('')
  }



  return (
    <>
      <h1 className="font-bold ">Computer Languages</h1>
      <table className="border">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Level</th>
            </tr>
        </thead>
        <tbody>
            
                {computerLanguages.map((language)=>{
                    return (
                        <tr>
                        <td>{language.id}</td>
                        <td>{language.name}</td>
                        <td>{language.age}</td>
                        <td>{language.level}</td>
                        </tr>
                    )
                })}
           
        </tbody>
      </table>
      <form onSubmit={handleClick}>
      <button className="p-2 rounded text-white bg-blue-500" onClick={handleClick}>Add</button>
     
      <input 
      className="border-gray-900 p-2"
      type="text" 
      placeholder="Enter langauage name..." required
      onChange={handleInput}
      value={name} />
       
       <input 
      className="border-gray-900 p-2"
      type="text" 
      placeholder="Enter Age..." required
      onChange={handleInputAge}
      value={age} />
      </form>
    </>
  );
}

export default ComputerLanguages;
