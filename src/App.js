import { useContext } from 'react';
import './App.css';
import Component1 from './components/Component1';
// import ComputerLanguages from './components/ComputerLanguages';
// import {Context} from './index'

import {Routes,Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import ContactPage from './pages/ContactPage';
import Hooks from './pages/Hooks';

function App() {
  // const data = useContext(Context)
  // console.log(data);
  return (
    <>
     {/* <ComputerLanguages/> */}
    {/* <div className='font-bold'>App Component</div>
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
    } */}
    {/* <Component1/> */}

    {/* <NavBar/> */}

    <BrowserRouter>
    <NavBar/>
     
    
      <Routes>
     
        <Route path='/home-page' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/hooks' element={<Hooks/>}/>

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
