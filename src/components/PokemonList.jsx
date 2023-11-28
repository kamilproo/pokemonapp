import {useEffect, useState, useSyncExternalStore} from "react";
import axios from "axios";
import {PokemonCard} from "./PokemonCard";
import '../style/pokemonList.css'

export const PokemonList = ({pokemon}) => {
    return (
        <div className={"list_pokemon"}>
            <>
                {pokemon.map((item, index) =>
                    <PokemonCard id={index}></PokemonCard>
                )}
            </>
        </div>
    )
}
