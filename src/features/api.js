import axios from "axios";


export const getPokemonData = async (limit = 22, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        await axios.get(url)
    } catch (e) {
        console.log(e)
    }
}

export const fetchPoke = async (url) => {
    try {
        const url = ' https://pokeapi.co/api/v2/pokemon'
        const data = await axios.get(url)
        return data
    } catch (e) {
        console.log(e)
    }
}






