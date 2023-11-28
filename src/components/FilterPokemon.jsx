import {useEffect, useState} from "react";
import axios from "axios";
import '../style/pokemonCard.css'

export const FilterPokemon = ({pokemon}) => {
    const [filtered, setFiltered] = useState(null)

    useEffect(() => {
        const filtered = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
                const data = res.data
                setFiltered(data)
            } catch (e) {console.log(e)}
        }

        filtered()
    }, [pokemon.id]);

    if(!filtered) {
        return null
    }

    return(
            <div className={"pokemon_container"}>
                {filtered.types && (
                    <p className={"pokemon_names"}>{pokemon.name}</p>
                )}

                {filtered.sprites && (
                    <img className={"pokemon_img"} src={pokemon?.sprites?.other.dream_world.front_default} alt={"not found"}/>
                )
                }
            </div>
    )

}