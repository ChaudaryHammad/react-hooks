import { useContext } from 'react';
import './App.css';
import Component1 from './components/Component1';
// import ComputerLanguages from './components/ComputerLanguages';
import {Context} from './index'

function App() {
  const data = useContext(Context)
  console.log(data);
  return (
    <>
     {/* <ComputerLanguages/> */}
    <div className='font-bold'>App Component</div>
    <p>Passed value by context: {data[2].name}</p>
    {
      data.map((data)=> {
        return (
          <div style={{display:'flex', justifyContent:'space-evenly'}}>
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.id}</p>
          </div>
        )
      })
    }
    <Component1/>
    </>
  );
}

export default App;
