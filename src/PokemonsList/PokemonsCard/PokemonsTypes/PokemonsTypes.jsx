import PokemonsCard from '../../PokemonsCard/PokemonsCard'
import './index.css'
import PokedexJson from '../../pokedex.json'

function PokemonsTypes({ values }) {
  const filterPokemons = PokedexJson.filter((element) => {
    if (element.names.fr.toLowerCase().includes(values.toLowerCase())) {
      return true
    } else {
      return false
    }
  })
  return (
    <div className="flex">
      {filterPokemons.map((element) => {
        return <PokemonsCard pokemonData={element} />
      })}
      
    </div>
  )
}

// function PokemonsTypes(pokemon){

// return(
//     pokemon.map(element => {

//         return(

//             element.types.map(types =>{
//                 <button>{types}</button>
//             })

//             )
//         })

//     )

// }

export default PokemonsTypes
