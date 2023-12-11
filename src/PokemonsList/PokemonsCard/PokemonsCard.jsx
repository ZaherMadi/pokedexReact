import './index.css'
import PokemonsTypes from './PokemonsTypes/PokemonsTypes'
function PokemonsCard({ pokemonData }) {
  return (
    <div className="Card">
      <div className="No">No.{pokemonData.id}</div>
      <div>
        <h3>{pokemonData.names.fr}</h3>
      </div>

      <div>
        <img src={pokemonData.image} alt="poke" width={100} />
      </div>
      {/* <div>{element.height}</div> */}
      <div>{pokemonData.weight}</div>
      <div>{pokemonData.height}</div>

      {/* { <div><PokemonsTypes params={elem}/></div> } */}
      {/* <div>{element.moves}</div> */}
    </div>
  )
}

export default PokemonsCard
