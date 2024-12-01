import React, { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./Stats";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;

  const instagramCharacterLeft = 280 - numberOfCharacters;
  const facebookCharacterLeft = 2200 - numberOfCharacters;

  const wordArray = text.trim().split(" ");
  const filterWordArray = wordArray.filter((item) => item != "");
  const numberOfWords = filterWordArray.length;

  const stats = {
    numberOfCharacters,
    instagramCharacterLeft,
    facebookCharacterLeft,
    numberOfWords,
  };

  return (
    <main className="container">
      <TextArea setText={setText} text={text} />
      <Stats stats={stats} />
    </main>
  );
}
