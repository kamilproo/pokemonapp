import {useEffect, useState} from "react";
import {getPokemonData} from "../features/api";
import axios, {get} from "axios";
import '../style/pokemonCard.css'

export const PokemonCard = ({id}) => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );
                setPokemon(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);


        return(
        <>
            <div className={"pokemon_container"}>
            {pokemon.types && (
                <p className={"pokemon_names"}>{pokemon.name}</p>
            )}

            {pokemon.sprites && (
                <img className={"pokemon_img"} src={pokemon?.sprites?.other.dream_world.front_default}/>
            )
            }
            </div>
        </>
    )
}