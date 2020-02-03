import React from "react";
import pokemonList from './PokemonList'

function YourList(props){
  const PokemonList = pokemonList.map(pokemon => {
    return(
      <Pokemon Pokemon={{name: pokemon.name}}/>
    )
  })
  return(
    <div>
      {PokemonList}
    </div>
  )
};

export default YourList;