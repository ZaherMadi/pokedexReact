import React from 'react'

const Searchbar = ({ values, setValues }) => {
  
    function triPokemons(event) {
    const pokesearch = event.target.value  
    setValues(pokesearch)
  }

  return (
    <div
      style={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input
        type="text"
        onChange={triPokemons}
        placeholder={'Entrez un pokémon'}
        value={values}
        style={{ flexGrow: 1, padding: '5px' }}
      />
    </div>
  )
}

export default Searchbar
