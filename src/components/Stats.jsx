import React from "react";

export default function Stats({ stats }) {
  const {
    numberOfCharacters,
    instagramCharacterLeft,
    facebookCharacterLeft,
    numberOfWords,
  } = stats;
  // const getStatStyle = (value) => {
  //   return {
  //     color: value < 0 ? "red" : "black",
  //   };
  // };
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Word" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat
        number={instagramCharacterLeft}
        label="Instagram"
        // style={getStatStyle(instagramCharacterLeft)}
      />
      <Stat
        number={facebookCharacterLeft}
        label="Facebook"
        // style={getStatStyle(instagramCharacterLeft)}
      />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number $ (number < 0 ? "stat__number--limit" : "")`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
// ift garera garni, as same value multiple tauma use garna sakincha
