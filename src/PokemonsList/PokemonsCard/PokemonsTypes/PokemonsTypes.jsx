import "./index.css"
function PokemonsTypes(pokemon){

return(
    pokemon.map(element => {

        return(

            element.types.map(types =>{
                <button>{types}</button>
            })


            )
        })


    )

}

export default PokemonsTypes