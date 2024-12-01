import React, { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ setText, text, setNumberOfCharacters }) {
  const [showWarning, setShowWarning] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    // Check for invalid characters
    if (newText.includes("<script>")) {
      setMessage("No script tag allowed.");
      setShowWarning(true);
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setMessage("No @ symbol allowed.");
      setShowWarning(true);
      newText = newText.replace("@", "");
    } else if (newText.includes("soniya", "")) {
      setMessage("No soniya symbol allowed.");
      setShowWarning(true);
      newText = newText.replace("soniya", "");
    } else {
      setMessage("");
      setShowWarning(false);
    }

    // Update text state and number of characters
    setText(newText);
    // setNumberOfCharacters(newText.length);
    // Pass updated length to parent
    const wordArray = newText.trim().split(" ");
    const wordArrayWithoutWhiteSpaces = wordArray.filter((val) => val !== "");
    const numberOfWords = wordArrayWithoutWhiteSpaces.length;

    setNumberOfCharacters({
      numberOfWords,
      instagramCharacterLeft: INSTAGRAM_MAX_CHARACTERS - newText.length,
      facebookCharacterLeft: FACEBOOK_MAX_CHARACTERS - newText.length,
    });
  };

  return (
    <>
      <textarea
        onChange={handleChange}
        placeholder="Enter your text"
        value={text}
        spellCheck={false}
        rows={12}
        className="textarea"
      />
      <Warning showWarning={showWarning} message={message} />
    </>
  );
}
