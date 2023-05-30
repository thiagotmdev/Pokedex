import { useState } from 'react'
import { Pokemon } from '../../types/Pokemon';
import { PokeImg } from '../PokeImg';
import { SwitchButton } from '../SwitchButton';
import './style.css'

export const Card = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);


  let maxPokemons = 251;

  const loadPokemons = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);
    let json = await response.json();
    setPokemons(json.results);
  }

  return (
    <>
      <button onClick={loadPokemons}>Carregar Pokemons</button> <br />
     <div className='total'> Total de Pokemons: {pokemons.length} <br /><br /></div>
     <SwitchButton/>
     

      <div className='container'>
        {pokemons.map((pokemon, index) => (
          <div key={index}>
            <div className='card'>
              <div className='card_int'>
                <div className='imgpoke'><PokeImg id={index + 1} /></div>
                <div className='namepoke'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}