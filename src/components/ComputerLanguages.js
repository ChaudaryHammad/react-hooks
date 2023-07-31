import React, { useState } from "react";

function ComputerLanguages() {
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


  const handleClick=()=>{
    setComputerLanguages([...computerLanguages,{id:5,name:'javaScript',age:30,level:'high'}])
  }

  const handleEmpty=()=>{
    setComputerLanguages([])
  }

  return (
    <>
      <h1>Computer Languages</h1>
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
      <button className="p-2 rounded text-white bg-blue-500" onClick={handleClick}>Add</button>
      <button className="p-2 ml-2 rounded text-white bg-red-500" onClick={handleEmpty}>Clear</button>
    </>
  );
}

export default ComputerLanguages;
