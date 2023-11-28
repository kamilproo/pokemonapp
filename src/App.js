import {useEffect, useState} from "react";
import {SearchBar} from "./components/SearchBar";
import {PokemonList} from "./components/PokemonList";
import './style/App.css'
import axios from "axios";
import {FilterPokemon} from "./components/FilterPokemon";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [searchPokemon, setSearchPokemon] = useState([])
  const [inputValue, setInputValue] = useState("")

  const fetchPokemons = async () => {
    try {
      const url = ' https://pokeapi.co/api/v2/pokemon'
      const data = await axios.get(url)
      const res = data.data.results
      delete res[0]
      const pokemonData = res.map((item, index) => ({
        ...item,
        ...res[index > 1]
      }))
      setPokemon(pokemonData)
      setSearchPokemon(pokemonData)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [pokemon, searchPokemon]);

    const handleInputChange = (event) => {
      setInputValue(event.target.value)

    }
    const handleSearching = (event) => {
      event.preventDefault()

      const filteredData = pokemon.filter((item) => {
        const name = item.name.english || item.name || ""
        return name.toLowerCase().includes(inputValue.toLowerCase())
      })
      setSearchPokemon(filteredData)
    }

  return (
    <div className="App_container">
      <SearchBar inputValue={inputValue} changeValue={handleInputChange} Searching={handleSearching}></SearchBar>
      <FilterPokemon pokemon={searchPokemon} key={searchPokemon.id}></FilterPokemon>
      <PokemonList pokemon={pokemon}></PokemonList>
    </div>
  );
}

export default App;
