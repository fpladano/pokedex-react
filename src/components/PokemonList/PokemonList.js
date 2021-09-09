import React, { useEffect, useState } from "react";
import PokemonListItem from "./PokemonListItem";

import styles from "./PokemonList.module.css";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      let pokemonsDataArr = [];
      for (let pokemonId = 1; pokemonId < 10; pokemonId++) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        if (!response.ok) {
          throw new Error("Something went Wrong!");
        }

        const data = await response.json();

        const transformedData = {
          id: data.id,
          name: data.name,
          sprite: data.sprites.front_default,
          types: data.types.map((slot) => slot.type.name),
          stats: data.stats.map((stat) => stat.base_stat),
          weight: data.weight * 0.1,
          height: data.height * 0.1,
          speciesUrl: data.species.url,
        };
        pokemonsDataArr.push(transformedData);
      }
      setPokemons(pokemonsDataArr);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // useEffect(() => {
  //   console.log(pokemons);
  // }, [pokemons]);

  return (
    <>
      {!loading && (
        <section className={styles["pokemon-list"]}>
          {pokemons.map((pokemon) => (
            <PokemonListItem key={pokemon.id} pokemon={pokemon} />
          ))}
        </section>
      )}
      {loading && <p>Loading...</p>}
    </>
  );
}
