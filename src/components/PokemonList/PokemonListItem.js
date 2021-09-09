import React, { useState } from "react";

import PokemonPage from "../PokemonPage/PokemonPage";

import styles from "./PokemonListItem.module.css";

const dexNumberFormatter = (number) => {
  if (number < 10) {
    return "00";
  } else if (number < 100) {
    return "0";
  } else {
    return "";
  }
};

export default function PokemonListItem({ pokemon }) {
  const [pokemonModal, setPokemonModal] = useState(false);

  const dexNumber = `#${dexNumberFormatter(pokemon.id)}${pokemon.id}`;

  const onPokemonClickHandler = () => {
    setPokemonModal(true);
  };

  const onPokemonCloseHandler = () => {
    setPokemonModal(false);
  };

  return (
    <>
      <div
        className={
          styles["pokemon-list__pokemon"] +
          " " +
          styles[`${pokemon.types[0]}-type-background`]
        }
        onClick={onPokemonClickHandler}
      >
        <div className={styles["pokemon-sprite"]}>
          <img src={pokemon.sprite} alt="This is Pokemon" />
        </div>
        <div className={styles["pokemon-info"]}>
          <span className={styles["pokemon-info__name"]}>{pokemon.name}</span>
          <div className={styles["pokemon-info__types"]}>
            {pokemon.types &&
              pokemon.types.map((item) => (
                <i
                  className={
                    styles.type + " " + styles[`${pokemon.types[0]}-type-font`]
                  }
                  key={item}
                >
                  {item}
                </i>
              ))}
          </div>
          <span className={styles["pokemon-info__dex-number"]}>
            {dexNumber}
          </span>
        </div>
      </div>
      {pokemonModal && (
        <PokemonPage
          pokemon={pokemon}
          dex={dexNumber}
          onClose={onPokemonCloseHandler}
        />
      )}
    </>
  );
}
