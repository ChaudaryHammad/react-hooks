import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Data from './Data'

const Context = createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Context.Provider value={Data}>
    <App />
    </Context.Provider>
  </React.StrictMode>
);

export {Context};