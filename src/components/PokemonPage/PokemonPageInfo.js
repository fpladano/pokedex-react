import React from "react";

import styles from "./PokemonPageInfo.module.css";

import pokeballImg from "../../images/pokeball.svg";

export default function PokemonPageInfo(props) {
  return (
    <div
      className={
        styles["pokemon-page__info"] +
        " " +
        styles[
          `${props.pokemon.types && props.pokemon.types[0]}-type-background`
        ]
      }
    >
      <div className="pokemon-page__info-background"></div>
      <div className={styles["pokemon-page__close-btn"]}>
        <span onClick={props.onClose}>X</span>
      </div>
      <div className={styles["pokeball-img-container"]}>
        <img
          className={styles["pokeball-img"]}
          src={pokeballImg}
          alt="pokeball"
        />
      </div>
      <div className={styles["pokemon-info"]}>
        <span className={styles["pokemon-info__dex"]}>{props.dex}</span>
        <span className={styles["pokemon-info__name"]}>
          {props.pokemon.name}
        </span>
        <div className={styles["pokemon-info__types"]}>
          {props.pokemon.types &&
            props.pokemon.types.map((item) => (
              <i
                className={
                  styles.type +
                  " " +
                  styles[`${props.pokemon.types[0]}-type-font`]
                }
                key={item}
              >
                {item}
              </i>
            ))}
        </div>
        <div className={styles["pokemon-info__sprite"]}>
          <img src={props.pokemon.sprite} alt="This is a Pokemon" />
        </div>
      </div>
    </div>
  );
}
