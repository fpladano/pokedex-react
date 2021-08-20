import React, { useState, useEffect } from "react";

import styles from "./PokemonAbout.module.css";

export default function PokemonAbout(props) {
  const [pokemonDescription, setPokemonDescription] = useState("");

  const fetchPokemonInfo = async () => {
    try {
      const response = await fetch(props.pokemon.speciesUrl);
      if (!response.ok) {
        throw new Error("Something went Wrong!");
      }
      const data = await response.json();

      const transformedData = data.flavor_text_entries[4].flavor_text;
      setPokemonDescription(transformedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  const pokemonTypeStyles = props.pokemon.types[0];

  return (
    <div className={styles["pokemon-about"]}>
      <div className={styles["pokemon-about__description"]}>
        <p>{pokemonDescription}</p>
      </div>
      <div className={styles["pokemon-about__data"]}>
        <h1
          className={
            styles["pokemon-about__title"] +
            " " +
            styles[`${pokemonTypeStyles}-type`]
          }
        >
          Basic Stats
        </h1>

        <div className={styles["pokemon-about__stat"]}>
          <label>HP:</label>
          <div className={styles["pokemon-stat"]}>
            <span className={styles["pokemon-stat__number"]}>
              {props.pokemon.stats[0]}
            </span>
            <div className={styles["pokemon-stat__progress-bar"]}>
              <div
                className={
                  styles["pokemon-stat__progress"] +
                  " " +
                  styles[`${pokemonTypeStyles}-type-bg`]
                }
                style={{ width: `${props.pokemon.stats[0] / 2}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className={styles["pokemon-about__stat"]}>
          <label>Attack:</label>
          <div className={styles["pokemon-stat"]}>
            <span className={styles["pokemon-stat__number"]}>
              {props.pokemon.stats[1]}
            </span>
            <div className={styles["pokemon-stat__progress-bar"]}>
              <div
                className={
                  styles["pokemon-stat__progress"] +
                  " " +
                  styles[`${pokemonTypeStyles}-type-bg`]
                }
                style={{ width: `${props.pokemon.stats[1] / 2}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className={styles["pokemon-about__stat"]}>
          <label>Defense:</label>
          <div className={styles["pokemon-stat"]}>
            <span className={styles["pokemon-stat__number"]}>
              {props.pokemon.stats[2]}
            </span>
            <div className={styles["pokemon-stat__progress-bar"]}>
              <div
                className={
                  styles["pokemon-stat__progress"] +
                  " " +
                  styles[`${pokemonTypeStyles}-type-bg`]
                }
                style={{ width: `${props.pokemon.stats[2] / 2}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className={styles["pokemon-about__stat"]}>
          <label>Sp.Atk:</label>
          <div className={styles["pokemon-stat"]}>
            <span className={styles["pokemon-stat__number"]}>
              {props.pokemon.stats[3]}
            </span>
            <div className={styles["pokemon-stat__progress-bar"]}>
              <div
                className={
                  styles["pokemon-stat__progress"] +
                  " " +
                  styles[`${pokemonTypeStyles}-type-bg`]
                }
                style={{ width: `${props.pokemon.stats[3] / 2}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className={styles["pokemon-about__stat"]}>
          <label>Sp.Def:</label>
          <div className={styles["pokemon-stat"]}>
            <span className={styles["pokemon-stat__number"]}>
              {props.pokemon.stats[4]}
            </span>
            <div className={styles["pokemon-stat__progress-bar"]}>
              <div
                className={
                  styles["pokemon-stat__progress"] +
                  " " +
                  styles[`${pokemonTypeStyles}-type-bg`]
                }
                style={{ width: `${props.pokemon.stats[4] / 2}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className={styles["pokemon-about__stat"]}>
          <label>Speed:</label>
          <div className={styles["pokemon-stat"]}>
            <span className={styles["pokemon-stat__number"]}>
              {props.pokemon.stats[5]}
            </span>
            <div className={styles["pokemon-stat__progress-bar"]}>
              <div
                className={
                  styles["pokemon-stat__progress"] +
                  " " +
                  styles[`${pokemonTypeStyles}-type-bg`]
                }
                style={{ width: `${props.pokemon.stats[5] / 1.6}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
