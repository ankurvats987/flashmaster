import React, { useContext } from "react";
import Deck from "../viewComponents/deck";
import DeckContext from "../../../context/deck/deck-context";

const DeckGridContainer = () => {
  const { allDeck } = useContext(DeckContext);

  return (
    <div className="deck-grid-container">
      {allDeck.map((deck, index) => (
        <Deck key={index} deckDetail={deck} />
      ))}
    </div>
  );
};

export default DeckGridContainer;
