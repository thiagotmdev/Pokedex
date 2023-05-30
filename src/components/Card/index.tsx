import { useState, useEffect } from 'react';
import { Pokemon } from '../../types/Pokemon';
import { SwitchButton } from '../SwitchButton';
import { PokeImg } from '../PokeImg';
import './style.css'

export const Card = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Define o número de itens exibidos por página

  let maxPokemons = 251;

  const loadPokemons = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);
    let json = await response.json();
    setPokemons(json.results);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  // Lógica para calcular o índice do primeiro e último item exibido na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  // Função para mudar para a próxima página
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Função para mudar para a página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className='total'> Total de Pokemons: {pokemons.length} <br /><br /></div>
      <SwitchButton/>

      <div className='container'>
        {currentPokemons.map((pokemon, index) => {
          const pokemonIndex = indexOfFirstItem + index + 1; // Calcula o índice real do pokémon
          return (
            <div key={index}>
              <div className='card'>
                <div className='card_int'>
                  <div className='imgpoke'><PokeImg id={pokemonIndex} /></div>
                  <div className='namepoke'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <button className='prevBtn' onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
        <button className='nextBtn' onClick={nextPage} disabled={indexOfLastItem >= pokemons.length}>Próxima</button>
      </div>
    </>
  );
};