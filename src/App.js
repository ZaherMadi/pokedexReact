import React from 'react';
import './App.css';
import Header from './Common/Header/Header';
import Logo from './Common/Header/Logo/Logo';
import PokemonsList from './PokemonsList/PokemonsList';
import Searchbar from './PokemonsList/Toolbar/Toolbar';
import PokemonsTypes from './PokemonsList/PokemonsCard/PokemonsTypes/PokemonsTypes';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";


function App() {
  const [values, setValues] = React.useState("")
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={
              <div>
              <Header/>
              <Searchbar values={values} setValues={setValues}/>
              <PokemonsList values ={values}/>
             </div>
        } />
         <Route path="/details" element={
              <div>
              <Header/>
              { <Searchbar values={values} setValues={setValues}/> }
              <PokemonsTypes values={values}/> 
            </div>
        } />
      </>
    )
  );

  return ( <RouterProvider router={router}/>

  );

}
export default App;
