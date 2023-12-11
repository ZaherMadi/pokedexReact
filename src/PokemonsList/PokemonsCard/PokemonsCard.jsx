import PokedexJson  from "./pokedex.json"
import "./index.css"
import PokemonsList from "../PokemonsList"
import PokemonsTypes from "./PokemonsTypes/PokemonsTypes"
function PokemonsCard(){
return(
    PokedexJson.map(element => {
        const elem = element
        return(
          
        <div className="Card">  
        <div className="No">No.{element.id}</div>
        <div><h3>{element.names.fr}</h3></div>
        
        <div><img src={element.image} alt="poke" width={100} /></div>
        {/* <div>{element.height}</div> */}
        <div>{element.weight}</div>
        <div>{element.height}</div>
 
        {/* { <div><PokemonsTypes params={elem}/></div> } */}
        {/* <div>{element.moves}</div> */}
        </div>)

        
       })
)


}

export default PokemonsCard 