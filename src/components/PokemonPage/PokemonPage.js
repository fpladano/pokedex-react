import React from "react";

import PokemonPageInfo from "./PokemonPageInfo";
import PokemonAbout from "./PokemonAbout";

import styles from "./PokemonPage.module.css";

export default function PokemonPage(props) {
  return (
    <section className={styles["pokemon-page__modal"]}>
      <PokemonPageInfo
        pokemon={props.pokemon}
        dex={props.dex}
        onClose={props.onClose}
      />
      <PokemonAbout pokemon={props.pokemon} />
    </section>
  );
}
