import React from "react";

import styles from "./Header.module.css";

import pokeballImg from "../../images/pokeball.svg";

export default function Header() {
  return (
    <header className={styles["main-header"]}>
      <span className={styles["main-header__logo"]}>Pokédex</span>
      <div className={styles["pokeball-img-container"]}>
        <img
          className={styles["pokeball-img"]}
          src={pokeballImg}
          alt="pokeball"
        />
      </div>
    </header>
  );
}
