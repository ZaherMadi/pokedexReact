import React from 'react';
import './App.css';
import Header from './Common/Header/Header';
import Logo from './Common/Header/Logo/Logo';
import PokemonsList from './PokemonsList/PokemonsList';
import Searchbar from './PokemonsList/Toolbar/Toolbar';


function App() {
  const [values, setValues] = React.useState("")
  


  return (

    <div>
      <Header/>
      <Searchbar values={values} setValues={setValues}/>
      <PokemonsList values ={values}/>
     </div>
  );
}
export default App;
